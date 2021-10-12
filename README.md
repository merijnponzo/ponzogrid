# ponzogrid


Within your tailwindconfig
``` 
const grid16 = require("./tailwind-ponzo.js");
const gridValues = grid16.gridSpacing();
```

and

```
module.exports = {
mode: "jit",
theme:{
    extend:{
        spacing: gridValues,
    }
},
plugins:[
    grid16.gridSizeComponent()
]
}
```