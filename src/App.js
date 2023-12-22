import './App.css';
import ComponentA from './components/ComponentA';

function App() {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      flexDirection:"column"
    }}>
      <h1>Task 1</h1>
      <div style={{
        display:"flex",
        justifyContent:"center",
        width: "100%"
      }}>
        <ComponentA />
      </div>
    </div>
  );
}

export default App;
