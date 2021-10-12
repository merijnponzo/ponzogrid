# ponzogrid


### creates rfs and rem based spacing grid values based on 16px grid

- eg p-64 or p-r64 (with rfs)
- below 32 pixels p-4 p-8 and smaller steps are available
- max spacing size is p-960



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

more about rfs
https://github.com/martijncuppens

more about 16px grid
https://www.carbondesignsystem.com/