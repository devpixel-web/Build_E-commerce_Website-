interface SubCardProps {
  icon: JSX.Element;
  text: string;
}
export default function SubCard({ icon, text }: SubCardProps) {
  return (
    <div className="group flex h-[145px] w-[170px] cursor-pointer items-center justify-center rounded border transition-colors delay-100 ease-in hover:bg-secondary2 hover:text-white">
      <div className="flex flex-col gap-2">
        <div className="mx-auto text-center">{icon}</div>
        <p>{text}</p>
      </div>
    </div>
  );
}
