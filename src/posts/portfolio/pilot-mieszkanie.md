---
title: "Zwiększ Wygodę z Pilotem WiFi: Rozwiązanie Problemu Braku Pilota do Telewizora"

tags: ["Arduino", "ESP", "IoT", "Robotics", "WiFi"]

img: "/pilot-mieszkanie/miniaturka-pilot.png"

date: "25-10-2023"
---

## W ramach tego projektu stworzyłem zdalny pilot do sterowania telewizorem, który pierwotnie nie posiadał pilota.

![Drugie podejście](/pilot-mieszkanie/pilot-online.png)

## Motywacja

Podczas przeprowadzki na studia, w wynajmowanym przeze mnie mieszkaniu napotkałem problem braku pilota do telewizora. Zamiast pozostawiać sprawę nierozwiązana, postanowiłem podjąć działanie. Chciałem nie tylko sterować telewizorem, ale także poprawić jego funkcjonalność i wygodę użytkowania.

## Proces twórczy

### Pierwsze podejście: Pilot na płytce stykowej

![Pierwsze podejście](/pilot-mieszkanie/prosty-pilot.png)

Moje pierwsze rozwiązanie polegało na stworzeniu prostego pilota na płytce stykowej, zasilanego bezpośrednio z 9V baterii. Głównym wyzwaniem było znalezienie odpowiednich sygnałów podczerwieni (IR) do sterowania telewizorem. Ostatecznie udało mi się pożyczyć działający pilot od współlokatora i sczytać sygnały z interesujących mnie przycisków za pomocą odbiornika IR. Posiadanie tablicy sygnałów okazało się bardzo przydane w kolejnych krokach.

### Drugie podejście: Pilot online z wykorzystaniem Arduino i ESP

Pierwsze podejście miało swoje wady, dlatego postanowiłem przenieść diodę IR bezpośrednio pod telewizor i komunikować się z nią poprzez Wi-Fi. Rozwiązanie składało się z dwóch głównych części:

- Arduino, które operowało diodą i symulowało pilot dla telewizora.

  ![Śmieć za telewizorem](/pilot-mieszkanie/smiec-za-telewizorem.png)

- ESP, które hostowało stronę i przekazywało sygnały z telefonu do Arduino.

  ![Drugie podejście](/pilot-mieszkanie/pilot-online.png)

## Ekstra

Mając w pokoju permanentnie działający serwer ESP, skorzystałem z tego, aby rozwiązać kilka innych problemów:

- Zasilacz w telewizorze wydawał cichy pisk, co w nocy przeszkadzało mi zasnąć. Rozwiązaniem było dołączenie przekaźnik szeregowo z telewizorem, co umożliwia zdalne odłączanie i podłączanie telewizora do prądu. To rozwiązanie nie tylko eliminuje dźwięk, ale także oszczędzała energię.

- Chciałem dodać podświetlenie za telewizorem. Rozwiązanie okazało się proste. Użyłem tego samego zasilacza który zasila mikrokontrolery. Wystarczyło dodać jeden tranzystor do sterowania Ledami, parę linijek kodu i dodatkowe przyciski w pilocie. Teraz mogę z telefonu włączyć i sterować jasnością podświetlania telewizora.

Dzięki temu projektowi nie tylko zyskałem wygodny pilot do telewizora, ale także stworzyłem system, który rozwiązał kilka innych problemów w moim pokoju. Takie podejście do rozwiązywania problemów pozwala mi na rozwijanie moich umiejętności w dziedzinach robotyki i systemów sterowania.

## Inspiracja

Inspiracją do tego projektu był [film z kanału GreatScott!](https://youtu.be/j1V2I-otdzk).
