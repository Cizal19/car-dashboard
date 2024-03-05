import RangeScreen from "./components/RangeScreen";
import SpecsScreen from "./components/SpecsScreen";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <RangeScreen />
      {/* <SpecsScreen /> */}
    </main>
  );
}
