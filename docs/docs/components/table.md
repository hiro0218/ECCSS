# Table

## default

<div class="sample-container">
  <table class="c-table">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Lame</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Steve</td>
        <td>Jobs</td>
        <td>56</td>
      </tr>
      <tr>
        <td>Bill</td>
        <td>Gates</td>
        <td>63</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="c-table">
  <thead>
    <tr>
      <th>First Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Steve</td>
    </tr>
  </tbody>
</table>
```

## no-border

<div class="sample-container">
  <table class="c-table no-border">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Lame</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Steve</td>
        <td>Jobs</td>
        <td>56</td>
      </tr>
      <tr>
        <td>Bill</td>
        <td>Gates</td>
        <td>63</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="c-table no-border">
  <thead>
    <tr>
      <th>First Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Steve</td>
    </tr>
  </tbody>
</table>
```

## scroll

テーブルの親要素に`.u-scroll-x`クラスを付け、小要素のテーブル要素に`.u-nowrap`クラスを付けることで横スクロールさせることが可能です。

<div class="sample-container">
  <div class="u-scroll-x">
    <table class="c-table u-nowrap">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Lame</th>
          <th>Age</th>
          <th>Company</th>
          <th>Product</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Steve</td>
          <td>Jobs</td>
          <td>56</td>
          <td>Apple Computer, Inc.</td>
          <td>macOS</td>
        </tr>
        <tr>
          <td>Bill</td>
          <td>Gates</td>
          <td>63</td>
          <td>Microsoft Corporation</td>
          <td>Microsoft Windows</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="u-scroll-x">
  <table class="c-table u-nowrap">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Lame</th>
        <th>Age</th>
        <th>Company</th>
        <th>Product</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Steve</td>
        <td>Jobs</td>
        <td>56</td>
        <td>Apple Computer, Inc.</td>
        <td>macOS</td>
      </tr>
      <tr>
        <td>Bill</td>
        <td>Gates</td>
        <td>63</td>
        <td>Microsoft Corporation</td>
        <td>Microsoft Windows</td>
      </tr>
    </tbody>
  </table>
</div>
```
