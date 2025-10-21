## `/skrypty`

Wyświetla główne okno pomocy skryptów Arkadii: przypomina o aktualizacji pakietu (`/aktualizuj_skrypty`, `/pobierz_mape`, `/kolory`), podaje odnośniki do sekcji tematycznych (`/cfg`, `/walka`, `/ekwipunek`, `/ziola`, `/ui`, `/aliasy`, `/bindy`, `/bronie`, `/pojemniki`, `/baza`) i streszcza dostępne liczniki oraz statystyki (np. `/stat`, `/postepy`, `/zabici`).

## `/konfiguracja`

Uruchamia pierwszą konfigurację skryptów. Konfigurator przeprowadzi przez podstawowe ustawienia skryptów takie jak stworzenie konfiguracji, keybindów oraz pobranie mapy.

## `/fake test`

Do testowania triggerów. Wyświetli żądaną linię i przeprocesuje ją przez silnik triggerów.
```
/fake Jestes w swietnej kondycji
```

## `/aliasy`

Otwiera dedykowaną pomoc aliasów: opisuje tymczasowe kolory (`/tcolor`), konfigurację tymczasowych bindów (`/tbind`) i multibindów lokacji (`/mbind`), a także przypomina o przełącznikach `/bind_on` i `/bind_off`.

## `/bindy`, `/keybindy`

Drukuje tabelę wszystkich aktywnych keybindów skryptów, pogrupowaną według kategorii (walka, inwentarz, poruszanie, multibindy, różne) wraz z przypisanymi skrótami i opisami.

## `/lua <kod>`

Wykonuje podany kod Lua (najpierw próbuje ocenić go jako wyrażenie i wypisać wynik).

## `/reload [moduł]`

Przeładowuje cały pakiet skryptów lub, po podaniu ścieżki modułu, tylko wskazaną paczkę Lua.

## `/init <profil> <wolacz>`

Inicjalizuje nową konfigurację profilu skryptów dla podanego imienia i wołacza.

## `/cget`

Wypisuje wszystkie wartości zapisane w konfiguracji.

## `/cget <wzorzec>`

Pokazuje tylko zmienne konfiguracyjne, których nazwy pasują do przekazanego wzorca.

## `/cset[!|!!] <klucz>=<wartość>`

Ustawia wartość zmiennej konfiguracyjnej na liczbę lub wartość logiczną (`!` uruchamia makra, `!!` pomija walidację).

## `/cset[!|!!] <klucz>="tekst"`

Zapisuje tekstową wartość zmiennej konfiguracyjnej (dostępne te same przełączniki `!`/`!!`).

## `/cset[!|!!] <klucz>[<indeks>]=<wartość>`

Aktualizuje wskazany element listy/mapy w konfiguracji wartością liczbową lub logiczną.

## `/cset[!|!!] <klucz>[<indeks>]="tekst"`

Nadaje tekstową wartość elementowi listy/mapy w konfiguracji.

## `/cdel[!|!!] <klucz>[<indeks>]`

Usuwa element listy/mapy z konfiguracji według podanego indeksu/klucza.

## `/cdel[!|!!] <klucz> <wartość>`

Kasuje wskazaną wartość liczbową lub logiczną z listy w konfiguracji.

## `/cdel[!|!!] <klucz> "tekst"`

Kasuje wskazaną wartość tekstową z listy w konfiguracji.

## `/cadd <klucz> <typ>`

Dodaje niestandardową zmienną konfiguracyjną określonego typu (`string`, `number`, `boolean`, `map`, `list`).

## `/cfg`

Wyświetla panel pomocy konfiguracji z odsyłaczami do internetowego manuala oraz listy kluczy konfiguracyjnych w repozytorium.

## `/cload <profil>`

Ładuje konfigurację profilu o podanej nazwie.

## `/cmigrate <profil>`

Migruje wskazaną konfigurację do nowego formatu.

## `/csave`

Zapisuje aktualną konfigurację profilu na dysku.

## `/laduj <profil>`

Skrót do `/cload` – ładuje konfigurację profilu o podanej nazwie.

## `/cinit <profil> <wolacz>`

Tworzy plik konfiguracji dla nowego profilu, uzupełniając go podstawowymi wartościami.

## `/kk`

Odświeża dane GMCP o obiektach, dzięki czemu drużynowy interfejs pobiera aktualne identyfikatory.

## `/zas <ID>`

Wydaje komendę zasłaniania wskazanego przeciwnika (identyfikator wrogów z listy drużynowej).

## `/zz <opis>`

Atakuje przeciwnika na podstawie podanego opisu (lub aliasu celu), automatycznie aktualizując cele drużyny.

## `/z`

Atakuje domyślnego „celu ataku”, gdy nie podano innego opisu.

## `/za <ID>`

Kieruje zasłonę na członka drużyny o podanym identyfikatorze.

## `/za`

Nakazuje zasłaniać aktualnie wskazany „cel obrony”.

## `/za <ID> <wróg>`

Tworzy wzmocnioną zasłonę – zasłania druha `ID` przed przeciwnikiem o podanym numerze.

## `/z <ID>`

Atakuje przeciwnika po numerze identyfikacyjnym (np. `ob_123` lub ID z listy GMCP).

## `/x <ID>`

Wykonuje zaskoczenie („zaskocz”) na przeciwniku wskazanym identyfikatorem.

## `/xx <opis>`

„Zaskocz” przeciwnika opisem lub aliasem, bez użycia numeru GMCP.

## `/prze <ID>`

Przełamuje obronę przeciwnika o podanym numerze, o ile kondycja na to pozwala.

## `/prze! <ID>`

Wymusza przełamanie obrony wroga bez sprawdzania poziomu zmęczenia.

## `/prze`

Przełamuje obronę bieżącego celu ataku, jeśli kondycja jest wystarczająca.

## `/prze!`

Wymusza przełamanie obrony bieżącego celu ataku.

## `/walka_restart`

Resetuje moduł drużynowy i ponownie zbiera informacje o członkach oraz przeciwnikach.

## `/walka`

Wyświetla rozbudowaną pomoc modułu walki: listę aliasów drużynowych, wskazówki dotyczące bindów oraz opis klikanych elementów interfejsu.

## `/ra <ID>`

Wydaje drużynie rozkaz ataku na przeciwnika o podanym numerze identyfikacyjnym.

## `/ra`

Nakazuje drużynie powtórzyć ostatni rozkaz ataku bez wskazywania nowego celu.

## `/rz <cel>`

Wydaje rozkaz zasłaniania postaci wskazanej identyfikatorem lub nazwą.

## `/rz`

Powtarza ostatni rozkaz zasłony bez zmian w wyborze celu.

## `/wa <ID>`

Ustawia wspólny „cel ataku” drużyny na przeciwnika o podanym numerze.

## `/wz <cel>`

Ustawia wspólny „cel obrony” drużyny na postać wskazaną identyfikatorem lub nazwą.

## `/numeruj`

Ponownie nadaje numery członkom drużyny, aby ułatwić wydawanie poleceń.

## `/por`

Porównuje twoją siłę, zręczność i wytrzymałość z przeciwnikiem, z którym aktualnie walczysz.

## `/por <ID>`

Porównuje siłę, zręczność i wytrzymałość z przeciwnikiem o podanym numerze (np. z listy wrogów lub GMCP `ob_<nr>`).

## `/por <opis>`

Porównuje statystyki z postacią dopasowaną po przekazanym opisie.

## `/w <cel>`

Wydaje polecenie wycofania wskazanego członka drużyny z walki.

## `/rb`

Aktywuje rozkaz blokowania dostępu do drużyny dla niepowołanych osób.

## `/za2 <ID>`

Kieruje zasłonę drugiej grupy na członka o podanym numerze.

## `/za2`

Powtarza ostatni rozkaz zasłony dla drugiej grupy.

## `/za3 <ID>`

Kieruje zasłonę trzeciej grupy na wskazanego członka drużyny.

## `/za3`

Powtarza ostatni rozkaz zasłony dla trzeciej grupy.

## `/za4 <ID>`

Kieruje zasłonę czwartej grupy na wybranego członka drużyny.

## `/za4`

Powtarza ostatni rozkaz zasłony dla czwartej grupy.

## `/obecni`

Pokazuje listę członków drużyny, którzy aktualnie znajdują się w pomieszczeniu.

## `/pro <lider>`

Przekazuje prowadzenie drużyny postaci o wskazanym identyfikatorze.

## `/zap <ID>`

Wysyła zaproszenie do drużyny do postaci o podanym numerze.

## `/zab`

Blokuje możliwość dołączania kolejnych postaci do drużyny.

## `/zab <ID>`

Blokuje wskazanego numerem członka drużyny.

## `/puszczaj_zaslony`

Włącza automatyczne zwalnianie zasłon na członkach drużyny.

## `/q <ID>`

Dodaje przeciwnika o podanym numerze do kolejki kolejnych ataków.

## `/nn`

Wykonuje wcześniej przygotowaną sekwencję „next next” (NN) ataków.

## `/hp <cel>`

Przypomina ostatnio zgłoszone punkty życia celu lub całej drużyny.

## `/szepnij <tekst>`

Wysyła prywatną wiadomość „szept” do drużyny lub wybranej osoby.

## `/ostatnio`

Pokazuje ostatnio przekazywane komunikaty drużynowe.

## `/zap`

Zapala lampę lub inne źródło światła trzymane w ręku (moduł ekwipunku).

## `/nlo`

Napełnia lampę paliwem, aby wydłużyć jej działanie.

## `/zg`

Gasi lampę, aby ograniczyć zużycie paliwa lub ukryć światło.

## `/ekwipunek`

Prezentuje pomoc modułu ekwipunku – opisuje bindy lampy, konfigurację zbierania łupów i komendy do obsługi magii.

## `/odloz_magie [do <torba>]`

Odkłada zwoje lub magiczne przedmioty do domyślnego lub wskazanego pojemnika.

## `/przejrzyj [<torba>]`

Przegląda zawartość domyślnego lub wskazanego pojemnika na magię.

## `/zbieranie <tryb>`

Ustawia tryb automatycznego zbierania łupów na wybrany profil.

## `/zbieranie`

Wyświetla pomoc dotyczącą konfiguracji zbierania łupów.

## `/zb`

Rozpoczyna automatyczne zbieranie łupów według aktualnych ustawień.

## `/zb!`

Wymusza zbieranie łupów, nawet jeśli mechanizmy bezpieczeństwa by je pominęły.

## `/zbieranie_monet <limit>`

Ustawia próg ilości monet zbieranych podczas plądrowania.

## `/zbieraj_extra <lista>`

Pozwala wskazać dodatkowe przedmioty, które mają być zbierane ponad standardowe ustawienia.

## `/nie_zbieraj_extra <lista>`

Usuwa wskazane przedmioty z listy dodatkowych łupów.

## `/zbierz`

Podnosi monety i łupy z ciał znajdujących się w pomieszczeniu.

## `/wem`

Wyciąga monety z pierwszej torby na pasie.

## `/wem<nr>`

Wyciąga monety z konkretnej torby na pasie oznaczonej numerem.

## `/wlm`

Wkłada monety do pierwszej torby na pasie.

## `/wlm<nr>`

Wkłada monety do torby na pasie o podanym numerze.

## `/wdp <opis>`

Wkłada przedmiot do pierwszego pojemnika w ekwipunku pasującego do opisu.

## `/wdp<nr> <opis>`

Wkłada przedmiot do pojemnika na pasie oznaczonego numerem.

## `/wzp <opis>`

Wyciąga przedmiot pasujący do opisu z pierwszego pojemnika w ekwipunku.

## `/wzp<nr> <opis>`

Wyciąga przedmiot z pojemnika na pasie o konkretnym numerze.

## `/wlp`

Wyciąga pojemnik z pasa do ręki.

## `/wlp<nr>`

Wyciąga pojemnik o określonym numerze.

## `/wep`

Wkłada pojemnik z ręki na pierwszy slot pasa.

## `/wep<nr>`

Wkłada pojemnik z ręki na slot pasa o wskazanym numerze.

## `/pojemniki`

Wyświetla pomoc dotyczącą obsługi pojemników i pasów.

## `/pojemnik`

Pokazuje informacje o aktualnie trzymanym pojemniku.

## `/napraw`, `/naprawa`

Oddaje przedmioty do kowala w celu naprawy.

## `/napraw_ubrania`

Przekazuje do naprawy wszystkie elementy ubioru.

## `/db`

Wyciąga broń z pierwszego slotu pasa.

## `/db<nr>`

Wyciąga broń z pasa o konkretnym numerze.

## `/ob`

Odkłada broń trzymaną w ręku na pierwszy slot pasa.

## `/ob<nr>`

Odkłada broń na slot pasa o podanym numerze.

## `/bronie`

Wyświetla pomoc dotyczącą zarządzania uzbrojeniem.

## `/sprzet`

Ocenia stan broni i zbroi znajdujących się w ekwipunku.

## `/tbind`

Wyświetla listę aktywnych tymczasowych bindów `temp1`–`temp4` oraz przypisane do nich sekwencje poleceń.

## `/tbind<nr> <tekst>`

Przypisuje sekwencję poleceń do tymczasowego binda `temp<nr>` (1–4); obsługuje łączenie kilku komend `#` i opóźnienia `*`.

## `/tbind_reset`

Resetuje wszystkie wpisy `tbind` do wartości domyślnych.

## `/bind_on`

Ponownie włącza wszystkie keybindy zdefiniowane przez skrypty Arkadii.

## `/bind_off`

Tymczasowo wyłącza wszystkie keybindy skryptów Arkadii bez kasowania ich konfiguracji.

## `/depozyt`

Aktualizuje informacje o stanie kont bankowych.

## `/depozyty`

Wypisuje listę znanych banków i zgromadzonych w nich środków.

## `/ziola_buduj`

Buduje listę ziół w oparciu o aktualne informacje z mapy.

## `/wezz <ziolo> <ilość>`

Wyjmuje określoną liczbę wskazanych ziół z woreczka.

## `/wezz <ziolo>`

Wyjmuje pojedynczy egzemplarz wskazanego zioła.

## `/_ziola_pokaz`

Pokazuje zioła w formacie kompatybilnym ze starszym modułem.

## `/ziola_pokaz`

Wyświetla zestawienie ziół według aktualnego modułu.

## `/woreczki_pokaz!`

Prezentuje szczegółowe zestawienie ziół z podziałem na woreczki.

## `/woreczki_pokaz`

Wyświetla skróconą listę ziół w poszczególnych woreczkach.

## `/ziola`

Pokazuje okno z odnośnikiem do internetowego poradnika zarządzania ziołami.

## `/zapakuj <ilość> <ziolo>`

Pakuje wskazaną liczbę ziół do woreczka.

## `/przeszukaj_ziola <wzorzec>`

Wyszukuje zioła pasujące do podanego wzorca.

## `/ziola_przepakuj <worek> <docelowy>`

Przepakowuje zioła między woreczkami według numerów.

## `/woreczki_buduj`

Buduje strukturę danych przechowującą woreczki i ich zawartość.

## `/ziola_daj <cel> <ziolo> <ilość>`

Przekazuje wskazane zioła członkowi drużyny.

## `/ziola_daj <cel> <ziolo>`

Przekazuje pojedynczy egzemplarz zioła drużynowemu adresatowi.

## `/ziola_odloz_woreczek <worek>`

Odkłada cały woreczek z ziołami o podanym numerze.

## `/zshow`

Wyświetla grupowanie ziół według kategorii.

## `/zshow!`

Wyświetla pełną listę ziół we wszystkich kategoriach.

## `/zshow <kategoria>`

Wyświetla tylko zioła z wybranej kategorii (`zme`, `kon`, `man`, `odt`, `wzm`, `poz`).

## `/zapl <kategoria>`

Nakłada zestaw ziół pasujących do wskazanej kategorii w trybie inteligentnym.

## `/zapl! <kategoria>`

Resetuje ustawienia inteligentnego nakładania ziół dla wybranej kategorii.

## `/zapl`

Pokazuje aktualną kolejkę inteligentnego nakładania ziół dla kategorii `kon`, `man` i `zme`.

## `/ktoto <opis>`

Wyszukuje osoby w bazie po fragmencie opisu i wypisuje pasujące wpisy.

## `/osoba <ID>`

Wyświetla szczegółowe informacje o osobie zapisanej w bazie pod wskazanym numerem ID.

## `/przeszukaj <opis>`

Przeszukuje bazę osób po wielu polach, umożliwiając odnalezienie wpisu po części danych.

## `/przypomnij <skrót>`

Znajduje zapisane osoby po skrócie lub aliasie i wypisuje ich dane.

## `/wrogowie`

Pokazuje listę osób oznaczonych jako wrogowie wraz z podstawowymi informacjami.

## `/dodaj_osobe <imie>#<opis>[#<tytuł>]`

Dodaje nową osobę do bazy, przyjmując imię oraz opis (opcjonalnie tytuł) oddzielone znakiem `#`.

## `/usun_osobe <ID>`

Usuwa wpis o wskazanym numerze ID z bazy osób.

## `/dodaj_do_gildii <osoba> <gildia>`

Przypisuje osobę (ID lub imię) do wybranej gildii zapisanej w bazie.

## `/dodaj_do_gildii <osoba>`

Usuwa powiązanie gildyjne dla wskazanej osoby, pozostawiając ją bez gildii.

## `/zgildiowani <gildia>`

Wyświetla listę osób z bazy przypisanych do danej gildii.

## `/gildie`

Wypisuje wszystkie gildie zdefiniowane w bazie wraz z ich skrótami.

## `/baza`

Wyświetla szczegółowy opis modułu bazy osób, podając liczbę zapisanych wpisów, listę przechowywanych pól oraz zestaw dostępnych komend.

## `/widziani`

Pokazuje, kogo ostatnio widziano wraz z czasem ostatniego spotkania.

## `/aktualizuj <ID> <pole> <wartość>`

Aktualizuje imię (`imie`), opis (`short`) lub tytuł (`title`) osoby o podanym ID.

## `/nabindach`

Wyświetla aktualnie skonfigurowane bindy ofensywne dla członków drużyny.

## `/nabindach-`

Resetuje zapisane bindy ofensywne do wartości domyślnych.

## `/przedstawieni`

Otwiera okno z listą ostatnio przedstawionych oraz zapamiętanych postaci, umożliwiając szybkie zapisywanie imion.

## `/med`, `/medytuj`
Medytacja oraz ocena wszystkich cech.
