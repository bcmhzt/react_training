
const UnionLiteral = () => {

  // 複数の型の組み合わせ
  let result: string | number | boolean;
  result = "success";  // OK
  result = 200;        // OK
  result = true;       // OK

  return (
    <>
      <h2>Union Types（ユニオン型）</h2>
      <p className="text">
      </p>
      <pre className="text">{JSON.stringify(result, null, 2)}</pre>


    </>
  );
};
export default UnionLiteral;
