# Course Map [![Dev Build](https://github.com/TKOaly/course-map/actions/workflows/test.yml/badge.svg?branch=develop)](https://github.com/TKOaly/course-map/actions/workflows/test.yml)

An unofficial course map for viewing University of Helsinki computer science course information and their prerequisites.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/c069f518-67d0-4d56-b973-94a376524a32">
  <img alt="Screenshot of course map UI" src="https://github.com/user-attachments/assets/f9491dae-5820-4b7b-8861-a3228d90c0a4">
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

[Course codes and names](data/ids.ts)

[Course information](data/courses.ts) (general course information that doesn't change between implementations)

[Degrees](data/index.ts) (Degrees and their degree structures / OPS)

[Curriculum](data/curriculum.ts) (individual course implementation periods/dates)

## Before a new academic year

1.  Create a new [degree structure](data/tkt/structure.ts) (OPS) if one is introduced or make possible changes to the current one

    -   List which courses are included in the structure
        -   Copying the old one should save some work
        -   [Add new courses](#adding-a-course) if needed
    -   Add new course equivalences to course list
        -   These can usually be found [here](https://studies.helsinki.fi/ohjeet/artikkeli/opetussuunnitelma-ja-opintojen-vastaavuudet) (link to HY site)

> Don't remove phased out courses from the [course codes](data/ids.ts) or [course list](data/courses.ts) unless they are no longer included in any [degree structures](data/tkt/structure.ts).

2.  Create a new curriculum for the upcoming year

    -   The preliminary course plans can usually be found [here](https://studies.helsinki.fi/ohjeet/artikkeli/mista-loydan-opintotarjonnan) (link to HY site)
    -   Remove the old one after the new one has started

> [!NOTE]
> This is completely optional or can be done just for the most important courses as this may be a lot of manual work. The main course map functionalities would not be affected.

3.  Make changes to individual course information if needed

## Adding a course

1. Add the course code and name to [ids.ts](data/ids.ts)

2. Add generic course information, prerequisites and equivalents to [courses.ts](data/courses.ts)

3. Add the course to all degree structures the course is part of (e.g. [TKT BSc degree](data/degree_structures/tkt.ts))

4. List when the course is held in [curriculum.ts](data/curriculum.ts) (optional)

## Adding a new degree

1. [Add new courses](#adding-a-course) needed in the degree

2. Add the degree's code to [enums.ts](data/enums.ts)

3. Create a directory for the degree and a degree stucture (OPS) (e.g. [TKT BSc degree](data/degree_structures/tkt.ts))

4. Incude the degree structure in [index.ts](data/index.ts)
