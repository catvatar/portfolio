---
title: "Smart Pilot: Zdalne Sterowanie Telewizorem w Mieszkaniu"
tags: ["Arduino", "ESP", "IoT", "Robotics"]
img: "/pilot-mieszkanie/miniaturka-pilot-blog.png"
date: "24-10-2023"
---

W mieszkaniu do którego się wprowadziłem na czas studiów znajdował się telewizor bez pilota.
Na początku planowałem po prostu z niego nie korzystać, ale zainspirowany [filmem z kanału GreatScott!](https://youtu.be/j1V2I-otdzk) postanowiłem wziąć sprawy w swoje ręce.

## Moim pierwszym rozwiązaniem był pilot na płytce stykowej

![Pierwsze podejście](/pilot-mieszkanie/prosty-pilot.png)

Pilot był zasilany bezpośrednio z 9V baterii.
Największym wyzwaniem w tym podejściu było znalezienie odpowiednich sygnałów IR do sterowania telewizorem.
Rozwiązaniem było pożyczenie działającego pilota od mojego współlokatora i sczytanie sygnałów z interesujących mnie przycisków za pomocą odbiornika IR.

## Podejście drugie

Pilocik na płytce był fajny ale miał sporo problemów, między innymi:

- Krótką żywotność baterii
- Był wyjątkowo nie poręczny
- Dioda IR była bardzo kierunkowa co utrudniało celowanie
- Kabelek od baterii w cały czas się łamał

Każdy z tych problemów można było adresować pojedynczo, zdecydowałem się jednak na inne rozwiązanie.
Postanowiłem przenieść diodę IR bezpośrednio pod telewizor i komunikować się z nią po lokalnym Wi-Fi.
Ostateczne rozwiązanie składa się z dwóch części:

- Arduino które operuje diodą i symuluje pilot dla telewizora
  ![Śmieć za telewizorem](/pilot-mieszkanie/smiec-za-telewizorem.png)
- ESP które hostuje stronę i przekazuje sygnały z telefonu do arduino
  ![Drugie podejście](/pilot-mieszkanie/pilot-online.png)

## Dodatkowe Udogodnienia

Mając w pokoju permanentnie działający serwer ESP skorzystałem z tego żeby rozwiązać parę innych powiązanych problemów:

> Zasilacz w telewizorze wydaje cichy pisk. W ciągu dnia nie jest to problem, ale w nocy doprowadzało mnie to do szału.

- Rozwiązaniem było dołączenie przekaźnika szeregowo z telewizorem w taki sposób, że teraz mogę z poziomu telefonu odłączyć i podłączyć telewizor do prądu. Ogranicza to również zużycie prądu telewizora.

> Chciałem dodać podświetlanie za telewizorem

- Rozwiązanie było wyjątkowo proste, zasilacz już miałem jako, że był potrzebny do mikrokontrolerów wystarczyło dodać jeden tranzystor do sterowania zasilaniem i parę ekstra linijek kodu żeby móc sterować nim z telefonu.
