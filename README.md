# 🌍 Country API React App

This is a React-based web application that fetches and displays information about countries using a public API. It demonstrates core concepts of React such as state management, side effects, routing, and global state sharing using custom Context API and custom hooks.

---

## 🚀 Features

- Fetches data from the Country API
- Displays country details like name, population, region, capital, and flag
- Light/Dark Theme Toggle (using Context API)
- Filter countries by region
- Search countries by name
- Responsive design for mobile and desktop
- Error handling and loading states

---

## 🧠 Concepts Used

### 🔹 `useState`
Used to manage local states such as:
- Search input
- Selected region
- Theme (light/dark)
- Fetched country data

### 🔹 `useEffect`
Used to fetch country data from the API on component mount or when filters change:
```js
useEffect(() => {
  fetchCountries();
}, []);
```

### 🔹 `useContext`
Used to share global state (like theme or filter settings) across components without prop drilling.

### 🔹 Custom Context API
A custom context was created to manage global states:
```js
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [region, setRegion] = useState("");
  // ...other shared states

  return (
    <AppContext.Provider value={{ theme, setTheme, region, setRegion }}>
      {children}
    </AppContext.Provider>
  );
};
```

### 🔹 Custom Hook
A custom hook was created to simplify access to context:
```js
const useAppContext = () => useContext(AppContext);
export default useAppContext;
```

Now you can use it anywhere like this:
```js
const { theme, setTheme } = useAppContext();
```

---

## 📦 Tech Stack

- React (Vite)
- React Router
- Context API
- CSS / SCSS
- Country REST API (https://restcountries.com)

## 💡 How to Run Locally

```bash
git clone https://github.com/Khalil-deve/React-countries-Api.git
cd countryapi
npm install
npm run dev
```

---

## 🌐 Live Demo

[View it on Netlify](https://countriesapi-proj.netlify.app/) <!-- Replace with your actual link -->










