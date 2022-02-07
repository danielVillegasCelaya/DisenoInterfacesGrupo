export function App() {
    return (
      <Router>
        <Header />
        <BootstrapHeader/>
        {MenuItems.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
      </Router>
    );
  }