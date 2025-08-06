# H5地图选择器 - 参数传递说明

## 概述

本地图选择器支持多种运行环境，包括uni-app原生应用和H5内嵌场景。当在H5内嵌环境中使用时，提供了多种向父级页面传递参数的方式。

## 支持的运行环境

1. **uni-app原生应用** - 使用uni.postMessage通信
2. **H5内嵌iframe** - 使用postMessage、URL参数、localStorage等方式
3. **独立H5页面** - 直接显示结果

## H5内嵌场景下的参数传递方式

### 1. postMessage方式（推荐）

**优点：** 实时性好，数据完整，支持复杂对象
**缺点：** 需要父页面监听消息

#### 子页面（地图页面）发送数据：
```javascript
window.parent.postMessage({
    type: 'MAP_LOCATION_SELECTED',
    data: {
        lat: 39.9042,
        lng: 116.4074,
        formatted_address: '北京市朝阳区...',
        address_components: [...]
    },
    timestamp: Date.now()
}, '*');
```

#### 父页面接收数据：
```javascript
window.addEventListener('message', function(event) {
    const { type, data } = event.data;
    
    if (type === 'MAP_LOCATION_SELECTED') {
        console.log('收到地图选择结果:', data);
        // 处理数据...
    }
});
```

### 2. URL参数方式

**优点：** 简单直接，兼容性好
**缺点：** 数据量有限，不适合复杂数据

#### 子页面发送数据：
```javascript
const urlParams = new URLSearchParams();
urlParams.set('lat', data.lat);
urlParams.set('lng', data.lng);
urlParams.set('address', encodeURIComponent(data.formatted_address));

// 可以通过window.location.href跳转
// 或者通过postMessage通知父页面处理URL参数
```

#### 父页面接收数据：
```javascript
const urlParams = new URLSearchParams(window.location.search);
const lat = urlParams.get('lat');
const lng = urlParams.get('lng');
const address = urlParams.get('address');

if (lat && lng && address) {
    const data = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        formatted_address: decodeURIComponent(address)
    };
    // 处理数据...
}
```

### 3. localStorage方式

**优点：** 数据持久化，支持复杂对象
**缺点：** 需要手动清理，可能存在数据冲突

#### 子页面存储数据：
```javascript
localStorage.setItem('selectedLocation', JSON.stringify({
    lat: data.lat,
    lng: data.lng,
    formatted_address: data.formatted_address,
    address_components: data.address_components,
    timestamp: Date.now()
}));
```

#### 父页面读取数据：
```javascript
const storedData = localStorage.getItem('selectedLocation');
if (storedData) {
    const data = JSON.parse(storedData);
    console.log('从localStorage获取的数据:', data);
    // 处理数据...
    
    // 可选：清理数据
    localStorage.removeItem('selectedLocation');
}
```

## 使用示例

### 基本使用

1. 将地图页面嵌入到iframe中：
```html
<iframe id="mapIframe" src="./index.html?lang=zh&lat=39.9042&lng=116.4074"></iframe>
```

2. 在父页面监听消息：
```javascript
window.addEventListener('message', function(event) {
    if (event.data.type === 'MAP_LOCATION_SELECTED') {
        const locationData = event.data.data;
        console.log('选择的位置:', locationData);
        
        // 处理位置数据
        handleLocationSelection(locationData);
    }
});
```

### 完整示例

参考 `parent-example.html` 文件，这是一个完整的父页面示例，展示了：
- 如何嵌入地图选择器
- 如何接收和处理选择结果
- 如何显示结果数据
- 如何处理不同的数据传递方式

## 传递的数据结构

选择位置后传递的数据包含以下字段：

```javascript
{
    lat: 39.9042,                    // 纬度
    lng: 116.4074,                   // 经度
    formatted_address: "北京市朝阳区...", // 格式化地址
    address_components: [             // 地址组件数组
        {
            long_name: "北京市",
            short_name: "北京",
            types: ["locality", "political"]
        },
        // ... 更多地址组件
    ]
}
```

## 注意事项

1. **跨域问题**：如果父页面和地图页面不在同一域名下，需要确保跨域设置正确
2. **消息验证**：在生产环境中，建议验证postMessage的来源
3. **数据清理**：使用localStorage时，记得及时清理不需要的数据
4. **错误处理**：添加适当的错误处理机制
5. **兼容性**：考虑不同浏览器的兼容性问题

## 调试技巧

1. 打开浏览器开发者工具
2. 查看Console面板中的日志信息
3. 在Network面板中查看请求情况
4. 在Application面板中查看localStorage数据

## 常见问题

**Q: 为什么收不到iframe的消息？**
A: 检查iframe是否正确加载，确认postMessage的监听代码是否正确

**Q: 数据传递失败怎么办？**
A: 可以尝试使用localStorage作为备选方案，或者检查浏览器控制台的错误信息

**Q: 如何处理复杂的数据结构？**
A: 建议使用postMessage方式，它支持传递完整的JavaScript对象 