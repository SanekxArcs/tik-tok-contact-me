import imageFoto from "./assets/photo_2024-03-14_22-31-50.jpg"
import Button from "./Button";

function App() {
 const btnData = [
   {
     link: "http://t.me/xbox_invite",
     text: "Telegram group",
   },
   {
     link: "https://www.youtube.com/@Sanekx_Arcs",
     text: "YouTube",
   },
   {
     link: "https://www.twitch.tv/sanekarc",
     text: "Twitch",
   },
   {
     link: "mailto:sanek.arc+tiktokfan@gmail.com",
     text: "Email",
   },
   {
     link: "https://github.com/SanekxArcs",
     text: "GithHub",
   },
   {
     link: "https://wa.me/qr/DISE7CCEVP5JJ1",
     text: "WhatsApp",
   },
   {
     link: "https://m.me/sanekx.arcs",
     text: "Facebook ME",
   },
 ];

  return (
    <>
      <div className=" bg-emerald-900 h-screen w-screen flex justify-center align-middle">
        <div className="max-h-screen max-w-96 bg-emerald-800 p-5 rounded-md m-1 shadow-md flex flex-col gap-5">
          <div className="flex justify-center">
            <img
              className="rounded-full h-20"
              src={imageFoto}
              alt="our foto of tiktoker"
            />
          </div>
          <div className="select-none">
            <h1 className="text-3xl text-center text-emerald-50">@Sanekx_Arcs</h1>
            <h2 className="text-center text-emerald-400">Oleksandr Dzisiak</h2>
            <div className="select-none">
              <ul className="flex flex-wrap gap-1 mt-2.5">
                <li className="bg-emerald-600 rounded-full">
                  <p className="text-xs px-2 py-1 text-emerald-300">
                    Tik-Tok Streamer
                  </p>
                </li>
                <li className="bg-emerald-600 rounded-full">
                  <p className="text-xs px-2 py-1 text-emerald-300">
                    Web Developer
                  </p>
                </li>
                <li className="bg-emerald-600 rounded-full">
                  <p className="text-xs px-2 py-1 text-emerald-300">Gamer</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {btnData.map((btn, index) => (
              <Button key={index} text={btn.text} link={btn.link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
