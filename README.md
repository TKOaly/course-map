# Course Map [![develop](https://github.com/TKOaly/course-map/actions/workflows/test.yml/badge.svg?branch=develop)](https://github.com/TKOaly/course-map/actions/workflows/test.yml)

An unofficial course map for viewing University of Helsinki computer science course information and their prerequisites.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/fbc707bf-d084-4703-b93b-3aaac3a00983">
  <img alt="Screenshot of course map UI" src="https://github.com/user-attachments/assets/23fb3046-ad3b-481d-9d84-c5661edc7ed1">
</picture>

## Installation

### Development

```bash
git clone https://github.com/TKOaly/course-map.git
cd course-map
npm install
npm run dev
```

## Data

Included [degrees](degrees/index.ts)

[Course codes](degrees/course-codes.ts)

generic [Course information](degrees/courses.ts)

[Curriculum](degrees/curriculum.ts) of the current academic year (when courses are held)

Degree specific course requirements and groupings (OPS)

-   [TKT](degrees/tkt/structure.ts)

[Data types](degrees/types.ts)

## Before a new academic year

1.  Create a new [degree structure](degrees/tkt/structure.ts) (OPS) if one is introduced or make possible changes to the current one

    -   List which courses are included in the structure
        -   Copying the old one should save some work
        -   [Add new courses](#adding-a-course) if needed
    -   Add new course equivalences to course list
        -   These can usually be found [here](https://studies.helsinki.fi/ohjeet/artikkeli/opetussuunnitelma-ja-opintojen-vastaavuudet) (link to HY site)

> [!WARNING]
> Don't remove phased out courses from the [course codes](degrees/course-codes.ts) or [course list](degrees/courses.ts) unless they are no longer included in any [degree structures](degrees/tkt/structure.ts).

2.  Create a new curriculum for the upcoming year

    -   The preliminary course plans can usually be found [here](https://studies.helsinki.fi/ohjeet/artikkeli/mista-loydan-opintotarjonnan) (link to HY site)
    -   Remove the old one after the new one has started

> [!NOTE]
> This is completely optional or can be done just for the most important courses as this may be a lot of manual work. The main course map functionalities would not be affected.

3.  Make changes to individual course information if needed

## Adding a course

1. Add the course code to [course-codes.ts](degrees/course-codes.ts)

    - The listed course names are not shown to the user (see note in file)

2. Add generic course information to [courses.ts](degrees/courses.ts)

    - List possible prerequisite courses
    - List possible equivalent courses

3. Add the course to all degree structures the course is part of (e.g. [TKT degree structure](degrees/tkt/structure.ts))

4. List when the course is held in [curriculum.ts](degrees/curriculum.ts)

## Adding a new degree

1. [Add new courses](#adding-a-course) needed in the degree

2. Add the degree's code to [enums.ts](degrees/enums.ts)

3. Create a directory for the degree and a degree stucture (OPS) (e.g. [TKT BSc degree](degrees/tkt/structure.ts))

4. Incude the degree structure in [index.ts](degrees/index.ts)
