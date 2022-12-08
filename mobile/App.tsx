import { NativeBaseProvider, StatusBar } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#f59e0b" />

      <DefaultCalc />
    </NativeBaseProvider>
  );
}
