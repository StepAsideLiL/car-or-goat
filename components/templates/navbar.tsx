import VariableStat from "@/components/playing-field/variable-stat";

const Navbar = () => {
  return (
    <header className="flex gap-2 w-full py-3">
      <div className="w-full"></div>

      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-medium">
          Choose A <span className="text-red-600">Card</span>
        </h1>
      </div>

      <div className="w-full flex justify-end">
        <VariableStat />
      </div>
    </header>
  );
};

export default Navbar;
