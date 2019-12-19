# Exercise #1

## Running project
1. Clone/download repository.
2. Open index.html file - use calculator.

## Editing project
If you'd like to apply changes to the code and run it:
1. Clone/download repository.
2. Run `npm install` script to install dependencies.
3. After each change in `JavaScript` files run `npm run build` script so webpack can transpile code using `babel`.
4. Open/refresh index.html file - use calculator.

## Initial requirements
1. Exercise should be realised using **Vanilla JavaScript**.
2. Minimum browser requirement for running code is **Chrome 79** & **Firefox 64**.
3. Exercise should be available on GitHub repository.

## Purpose
Create simple four-function calculator


**Kalkulator – logika algebraiczna uproszczona**
> Jest to logika obecnie typowa dla prostych kalkulatorów, zbliżona do zwykłej notacji matematycznej. W kalkulatorach tego rodzaju wprowadza się liczbę, symbol działania, kolejną liczbę, znak wprowadzenia wyniku (najczęściej symbol `=` ) albo znak kolejnego działania. Obliczenia są wykonywane na bieżąco bez uwzględniania hierarchii działań zgodnej z notacją matematyczną, czyli wprowadzenie `3+2×5=` nie da `13` zgodnie z kolejnością działań, ale `25` (po wciśnięciu klawisza `×` liczba `3` zostanie dodane do `2` i dopiero wynik tego działania zostanie pomnożony przez `5`).

*– za wikipedią https://pl.wikipedia.org/wiki/Kalkulator*

## Functionalities
1. Operations:
    - Addition (+)
    - Subtraction (-)
    - Multiplication (*)
    - Division (/)
2. Additional Functions:
    - Operations on float numbers
    - Equality sign (=) returns last operation's result
    - "C" deletes entire inputed expression (entire memory)
    - "CE" allows to input digit again

## Additional requirements
1. For styling use **[Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/)** library. Purpose of this is to check if you are able to use it.
2. GitHub code should be placed in separate branch (not "master" branch). When your work is done create new [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests). Subsequently either mention us (intive mentors) in the comment (using **@**) or add both of us as Pull Request reviewers.