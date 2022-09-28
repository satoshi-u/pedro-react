import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { About } from './About';
import Home from './Home';
import { Navbar } from './Navbar';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { UserForm } from './UserForm';
import { Footer } from './Footer';

// @ts-ignore
export const AppContext = createContext();

// npx create-react-app .
// npx create-react-app . --template typescript
function App() {
  const [user, setUser] = useState('sarthak');
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/userform" element={<UserForm />} />
            <Route
              path="*"
              element={<h1>Page Not Found 404 :/</h1>}
            />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;

/*
                                          USE EFFECT
This runs subsequently for any change in component, when states or props update
useEffect(()=>{
  ...
})

This runs subsequently only when the things specified in dependency array [], the second arg, changes
useEffect(()=>{
  ...
}, [x])

useEffect(()=>{
  ...
  return () => {code} // code runs only when the component is about to unmount
}, [])

NOTE: If you call an API in the component which changes the component-state outside the useEffect;
      It will run forever.
*/

/*
                                          USE CONTEXT
NOTE: it creates global scoped variables/functions
      helps avoiding prop drilling(passing through a chain just to pass prop to end component)
      easily access variables/functions within sibling-components
*/

/*
                                          USE QUERY
const {data} = useQuery(['unique-namespace-key'], () => {
  ... // call API
});

NOTE: By default, useQuery fetches even if you switch browser tab. Disable in QueryClient config.

TODO: You can have a config file containing unique-namespace-keys, one for each API.
*/

/*
                                          USE CUSTOM HOOK
NOTE: it abstracts away the logic into separate files.
      we can reuse these hooks across components.
      project becomes more organized - all logics in hooks and not components.

TODO: Abstract cat fact api call into custom hook.
*/
