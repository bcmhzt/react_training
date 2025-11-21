# react_training


## Start
node.jsの確認
```
% node -v              
v22.21.1
% npm -v
10.9.4
```
React Projectの作成  
2025-11-21現在は、`Create React App`はもう使われなくなっている。代わりに`vite`を使う方法が主流になっているらしい。
```
% npm create vite@latest react_training_a1 --template react-ts

- TypeScriptを選択
```

起動
```
% cd react_training_a1
% npm run dev
```
[http://localhost:5173/](http://localhost:5173/)


# React × TypeScript 学習カリキュラム Index

## Phase 0：前提知識の整理（基礎強化）

### 1. TypeScript の超基礎文法

- 基本型（string / number / boolean / null / undefined）
- オブジェクト
- 配列型
- Union / Literal Types
- Type alias / Interface
- Optional / Readonly
- Enum
- 型推論（infer）
- any / unknown / never の正しい使い分け

### 2. TSConfig の意味

- strict の意味
- noImplicitAny
- moduleResolution
- JSX 設定

## Phase 1：React + TypeScript の土台理解

### 1. JSX と型の関係

- FC（Functional Component）型の正しい書き方
- React.FC は使う or 使わない？（現代のベスト）
- children の型付け
- Props の型設計（interface / type の違い）
- default props / optional props の型
- Event ハンドラの型（onClick / onChange など）

### 2. Hooks × TS の基礎

- useState の型付け
    - Union
    - null 初期値
- useEffect の依存配列と型
- useRef の型付け（これが躓きポイント）
    - DOM 参照
    - 変数保持
- useMemo / useCallback の型

## Phase 2：実務で必須の型設計スキル（重要）

### 1. API レスポンス型の設計

- REST API
- GraphQL / Firestore
- Axios × TS の正しい書き方

### 2. データモデルの型定義

- ユーザーモデル
- 投稿モデル
- メッセージモデル
- Shop/Meal モデル（あなたのプロジェクト想定）

### 3. Utility Types の理解

- Partial
- Required
- Pick
- Omit
- Record
- ReturnType
- Readonly
- Extract / Exclude → 実務で必須です。

### 4. Map 型 / Key 型

- Record<string, X>
- keyof / typeof
- Mapped Types
- 動的なオブジェクトに強くなる

## Phase 3：React コンポーネント × TS の実務パターン

### 1. コンポーネントの型設計

- Container / Presenter
- Props の分解
- forwardRef の型付け
- カスタム Hooks の型付け
- Form コンポーネントの型（input, select, textarea）

### 2. Context API × TypeScript

- Context の型（Provider / useContext）
- null 初期化問題の正しい解決
- 複雑な状態を安全に扱う方法
- Dispatch と Reducer の型

### 3. Redux / Recoil / Zustand の型

（あなたが Firestore を扱う前提で Zustand や Context の型設計が重要）

### 4. React Router × TS

- useParams / useNavigate の型
- 画面遷移とパラメータ型の管理

## Phase 4：実戦型 TypeScript（高度だが超重要）

### 1. 非同期処理 × 型

- Promise の型
- async/await と戻り値
- Axios のレスポンス型
- Firestore ドキュメントの型（超実務で重要）

### 2. フォーム管理（React Hook Form）

- フォームスキーマ
- Zod × React Hook Form
- フォームデータの型の自動生成（最強パターン）

### 3. カスタム Hooks を型安全に作る

- 戻り値の型
- 引数の型
- undefined/null の扱い
- バリデーション

### 4. コンポーネントの汎用化

- Generics（ジェネリクス）
- 汎用 Table コンポーネント
- 汎用 Select コンポーネント
- 汎用 API Hook

5. Firestore × TypeScript（あなたのプロジェクト前提）

- Document 型
- Converter の使い方
- Snapshot の型
- onSnapshot の返り型
- コレクション ID の型付け
- message / chat / read_state の型設計（あなた向け特化）

## Phase 5：React TypeScript アーキテクチャ全体設計

### 1. 型ファイル構成

- types/ ディレクトリ
- models/
- hooks/
- context/
- api/
- 型の依存関係をどう整理するか

### 2. API 層の型安全アーキテクチャ

- axios + swr / react-query
- キャッシュの型
- API レスポンスのバリデーション
- 型の再利用

### 3. 大規模アプリの型戦略

- Union と Discriminated Union
- エラー型
- 型の分割と統合
- MustPick / StrictOmit などの応用

## BONUS：Bcmhzt機能に最適化した学習項目

- メッセージ型（画像・OGP・文字・既読管理）
- チャットルーム型（ownerUID, updated_at）
- onSnapshot の型
- 送信メッセージのバリデーション
- QuerySnapshot の型
- 無限スクロールの型
- バッジ数の型と context 管理
