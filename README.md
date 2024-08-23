# Course Map

A unofficial course map for viewing University of Helsinki computer science course information and their prerequisites.

## Data

Included [Study programmes](programmes/index.ts)

[Course codes](programmes/course_codes.ts)

generic [Course information](programmes/courses.ts)

[Curriculum](programmes/curriculum.ts) of the current academic year (when courses are held)

Study programme specific course requirements and groupings (OPS)

-   [TKT](programmes/tkt/structure.ts)

[Data types](programmes/types.ts)

## Before a new academic year

1.  Create a new [programme structure](programmes/tkt/structure.ts) (OPS) if one is introduced or make possible changes to the current one

    -   List which courses are included in the structure
        -   Copying the old one should save some work
        -   [Add new courses](#adding-a-course) if needed
    -   Add new course equivalences to course list
        -   These can usually be found [here](https://studies.helsinki.fi/ohjeet/artikkeli/opetussuunnitelma-ja-opintojen-vastaavuudet) (link to HY site)

    > [!WARNING]
    > Don't remove phased out courses from the [course codes](programmes/course_codes.ts), [course list](programmes/courses.ts) unless they are no longer included in any [programme structures](programmes/tkt/structure.ts).

2.  Create a new curriculum for the upcoming year

    -   The preliminary course plans can usually be found [here](https://studies.helsinki.fi/ohjeet/artikkeli/mista-loydan-opintotarjonnan) (link to HY site)
    -   Remove the old one after the new one has started

    > [!NOTE]
    > This is completely optional or can be done just for the most important courses as this may be a lot of manual work. The main course map functionalities would not be affected.

3.  Make changes to individual course information if needed

## Adding a course

1. Add the course code to [course_codes.ts](programmes/course_codes.ts)

    - The listed course names are not shown to the user (see note in file)

2. Add generic course information to [courses.ts](programmes/courses.ts)

    - List possible prerequisite courses
    - List possible equivalent courses

3. Add the course to all programme structures the course is part of (e.g. TKT: [structure.ts](programmes/tkt/structure.ts))

4. List when the course is held in [curriculum.ts](programmes/curriculum.ts)

## Adding a new study programme

1. [Add new courses](#adding-a-course) needed in the programme

2. Add the programmes code to [enums.ts](programmes/enums.ts)

3. Create a directory for the programme and a programme stucture (OPS) (e.g. [TKT Study programme](programmes/tkt/structure.ts))

4. Incude the programme structure in [index.ts](programmes/index.ts)
