# Calendar and DatePicker components

## Run the codes

1. Install all dependencies.

```bash
npm i
#or
yarn
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build the codes

```bash
npm run build
#or
yarn build
```

## Calendar API

|Name    |Type                         |Default   |Description                                   |
|--------|-----------------------------|----------|----------------------------------------------|
|display |boolean                      |false     |Show or hide the calendar                     |
|date    |string, number or Date object|Today     |The date that you want to show in first render|
|onSelect|function(date)               |undefined |Invoked when a date is selected.              |