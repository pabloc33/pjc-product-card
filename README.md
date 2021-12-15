# PJC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Pablo Contino

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'pjc-product-card'
```

```
<ProductCard
product={product}
initialValues={{
            count: 6,
            // maxCount: 10,
          }} >
{({ count, reset, isMaxCountReached, maxCount, increaseBy }) => (
<>
<ProductImage />
<ProductTitle />
<ProductButtons />
</>
)}
</ProductCard>

```
