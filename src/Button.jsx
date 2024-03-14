

const Button = ({link, text}) => {
  return (
    <a href={link}>
      <div className=" hover:translate-y-[-2px] hover:ring-2 shadow hover:shadow-md flex justify-center gap-2 w-full bg-emerald-600 ring-1 ring-emerald-400 rounded-md text-center py-1 text-white transition-all">
        {text}
      </div>
    </a>
  );
}

export default Button
