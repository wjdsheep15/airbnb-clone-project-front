export async function DataGet() {
  const result = await fetch(`http://localhost:3001/`);
  const inner = await result.json();
  const categroyIconData = inner.Category;

  return categroyIconData;
}
