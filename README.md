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

1. 基本型（string / number / boolean / null / undefined）
1. オブジェクト
1. 配列型
1. Union / Literal Types
1. Type alias / Interface
1. Optional / Readonly
1. Enum
1. 型推論（infer）
1. any / unknown / never の正しい使い分け

### 2. TSConfig の意味

1. strict の意味
1. noImplicitAny
1. moduleResolution
1. JSX 設定

## Phase 1：React + TypeScript の土台理解

### 1. JSX と型の関係

1. FC（Functional Component）型の正しい書き方
1. React.FC は使う or 使わない？（現代のベスト）
1. children の型付け
1. Props の型設計（interface / type の違い）
1. default props / optional props の型
1. Event ハンドラの型（onClick / onChange など）

### 2. Hooks × TS の基礎

1. useState の型付け
    1. Union
    1. null 初期値
1. useEffect の依存配列と型
1. useRef の型付け（これが躓きポイント）
    1. DOM 参照
    1. 変数保持
1. useMemo / useCallback の型

## Phase 2：実務で必須の型設計スキル（重要）

### 1. API レスポンス型の設計

1. REST API
1. GraphQL / Firestore
1. Axios × TS の正しい書き方

### 2. データモデルの型定義

1. ユーザーモデル
1. 投稿モデル
1. メッセージモデル
1. Shop/Meal モデル（あなたのプロジェクト想定）

### 3. Utility Types の理解

1. Partial
1. Required
1. Pick
1. Omit
1. Record
1. ReturnType
1. Readonly
1. Extract / Exclude → 実務で必須です。

### 4. Map 型 / Key 型

1. Record<string, X>
1. keyof / typeof
1. Mapped Types
1. 動的なオブジェクトに強くなる

## Phase 3：React コンポーネント × TS の実務パターン

### 1. コンポーネントの型設計

1. Container / Presenter
1. Props の分解
1. forwardRef の型付け
1. カスタム Hooks の型付け
1. Form コンポーネントの型（input, select, textarea）

### 2. Context API × TypeScript

1. Context の型（Provider / useContext）
1. null 初期化問題の正しい解決
1. 複雑な状態を安全に扱う方法
1. Dispatch と Reducer の型

### 3. Redux / Recoil / Zustand の型

（あなたが Firestore を扱う前提で Zustand や Context の型設計が重要）

### 4. React Router × TS

1. useParams / useNavigate の型
1. 画面遷移とパラメータ型の管理

## Phase 4：実戦型 TypeScript（高度だが超重要）

### 1. 非同期処理 × 型

1. Promise の型
1. async/await と戻り値
1. Axios のレスポンス型
1. Firestore ドキュメントの型（超実務で重要）

### 2. フォーム管理（React Hook Form）

1. フォームスキーマ
1. Zod × React Hook Form
1. フォームデータの型の自動生成（最強パターン）

### 3. カスタム Hooks を型安全に作る

1. 戻り値の型
1. 引数の型
1. undefined/null の扱い
1. バリデーション

### 4. コンポーネントの汎用化

1. Generics（ジェネリクス）
1. 汎用 Table コンポーネント
1. 汎用 Select コンポーネント
1. 汎用 API Hook

5. Firestore × TypeScript（あなたのプロジェクト前提）

1. Document 型
1. Converter の使い方
1. Snapshot の型
1. onSnapshot の返り型
1. コレクション ID の型付け
1. message / chat / read_state の型設計（あなた向け特化）

## Phase 5：React TypeScript アーキテクチャ全体設計

### 1. 型ファイル構成

1. types/ ディレクトリ
1. models/
1. hooks/
1. context/
1. api/
1. 型の依存関係をどう整理するか

### 2. API 層の型安全アーキテクチャ

1. axios + swr / react-query
1. キャッシュの型
1. API レスポンスのバリデーション
1. 型の再利用

### 3. 大規模アプリの型戦略

1. Union と Discriminated Union
1. エラー型
1. 型の分割と統合
1. MustPick / StrictOmit などの応用

## BONUS：Bcmhzt機能に最適化した学習項目

1. メッセージ型（画像・OGP・文字・既読管理）
1. チャットルーム型（ownerUID, updated_at）
1. onSnapshot の型
1. 送信メッセージのバリデーション
1. QuerySnapshot の型
1. 無限スクロールの型
1. バッジ数の型と context 管理
