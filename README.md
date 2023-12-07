# CompleteAppNoStandAlone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Project Inroduction

1. if you want modules `ng new --no-standalone`

### Task add bootstrap

1. ref <https://getbootstrap.com/>
2. run `npm i bootstrap@5.3.2`
3. update angular.json `styles: "../bootstrap/dist/css/bootstrap.rtl.min.css"`
4. add to styles.css `@import "~bootstrap/dist/css/bootstrap.css"`
5. Test for bootstrap

```typescript
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <app-re
    </div>
  </div>
</div>
```

### Task Add header.component

### Task add components: recipes, recipe-list, recipe-details, recipe-item, shopping-list, shopping-edit

1. `ng g c recipes`
