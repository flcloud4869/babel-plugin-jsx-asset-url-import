import _import_assets2 from "/fixtures/logo.png";
import _import_assets from "./logo.png";
export function App() {
  return (
    <article>
      <img src={_import_assets} alt="" />
      <img src={_import_assets2} alt="" />
      <img src="//example.com/fixtures/logo.png" alt="" />
    </article>
  );
}