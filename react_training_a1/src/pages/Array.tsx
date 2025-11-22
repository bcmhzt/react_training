
const Array = () => {
  /*
  配列をそれぞれ定義して
  
  */

  // interfaceを使った配列の型定義
  interface NumberArray extends Array<number> { }
  interface StringArray extends Array<string> { }
  interface MixedArray extends Array<string | number> { }
  // 値の代入（型推論を利用）
  let numbers: NumberArray = [1, 2, 3, 4, 5];
  let fruits: StringArray = ["りんご", "バナナ", "オレンジ"];
  let mixed: MixedArray = ["Apple", 100, "Banana", 200];

  // 値の代入
  // numbers = [1, 2, 3, 4, 5];
  // fruits = ["りんご", "バナナ", "オレンジ"];
  // mixed = ["Apple", 100, "Banana", 200];

  // オブジェクトの配列の型定義（typeを使ってもinterfaevceを使っても良い）

  // type User = {
  //   id: number;
  //   name: string;
  //   age: number;
  // };

  interface User {
    id: number;
    name: string;
    age: number;
  };

  let users: User[];
  users = [
    { id: 1, name: "太郎", age: 25 },
    { id: 2, name: "花子", age: 30 },
    { id: 3, name: "次郎", age: 28 }
  ];

  return (
    <>
      <h2>配列型</h2>

      <h3>数値の配列</h3>
      <pre className="text">{JSON.stringify(numbers, null, 2)}</pre>

      <h3>文字列の配列</h3>
      <pre className="text">{JSON.stringify(fruits, null, 2)}</pre>

      <h3>混合型の配列</h3>
      <pre className="text">{JSON.stringify(mixed, null, 2)}</pre>

      <h3>オブジェクトの配列</h3>
      <pre className="text">{JSON.stringify(users, null, 2)}</pre>

      <h3>配列をリストで表示</h3>
      <ul className="ul-list text">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3>オブジェクト配列をテーブルで表示</h3>
      <table className="text" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>名前</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>年齢</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Array;
