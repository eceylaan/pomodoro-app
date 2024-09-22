import React, { useEffect, useState } from "react";

export const Pomodoro = ({ settings }) => {
  const [time, setTime] = useState(settings.pomodoroTime);
  const [active, setActive] = useState(false);
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    //padStart(2, "0"), string uzunluğu 2 karakterden kısa ise
    //başına 0 ekler. Örneğin, 5 dakikayı 05 şeklinde gösterir.
    //Eğer dakika sayısı zaten iki basamaklıysa (örneğin 25), olduğu gibi bırakır.
    //ayni seyi saniyeler icin yapiyoruz sonra

    //padStart nasi calisiyo
    // padStart, JavaScript'te bir string metodudur ve bir string'in başına belirli
    //bir karakter ekleyerek istenen uzunluğa ulaşmasını sağlar. Eğer string
    //belirtilen uzunluğa zaten sahipse ya da daha uzunsa, padStart string'i olduğu gibi bırakır.

    //str.padStart(targetLength, padString) -> mantigi bu
    //targetLength: String'in ulaşması gereken toplam uzunluk.
    //padString (opsiyonel): String'in başına eklenecek karakter
    //ya da karakterler. Eğer belirtilmezse, varsayılan olarak boşluk (" ") eklenir.

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    const id = setTimeout(() => {
      if (active && time > 0) {
        setTime((prev) => prev - 1);
      }
    }, 1000);
    () => clearTimeout(id);
  }, [active, time]);
  return (
    <div>
      {formatTime(time)}
      <button style={{ width: "100px", color: "purple", height: "40px" }} onClick={() => setActive((prev) => !prev)}>
        {active ? "Pause" : "Play"}
      </button>
    </div>
  );
};

//id kullanmamızın ana sebebi:
//setTimeout zamanlayıcısını iptal etmek için ona erişim sağlamaktır.
//Bu, hem bellek yönetimi hem de uygulamanın düzgün çalışması açısından gereklidir.
//setTimeOut arkada birikiyo hangi time'ı silecegini anlamasi icin id veriyoruz yani
