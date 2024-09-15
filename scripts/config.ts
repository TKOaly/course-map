export const scriptDebug = false

export const currentCurriculumId = 'hy-lv-75'

export const universityRootId = 'hy-university-root-id'

export const facultiesToInclude = [
    'hy-org-1000000911', // Faculty of Science
]

export const educationTypesToInclude: string[] = [
    'bachelors-and-masters-degree',
    'masters-degree',
    // 'doctor',
    // 'lic',
    // 'bachelors-degree',
]

// Only include these programme modules in scripts
// Switch to false to include all programme modules
export const onlyProgrammes = true
    ? [
          'hy-DP-114256325', // TKT bachelors
          'hy-DP-127334567', // bachelors in science
          'hy-DP-114257406', // CSM masters
          'hy-DP-114257413', // DATA masters
          'hy-DP-114257281', // LSI masters
          'hy-DP-114256174', // MAT bachelor
          'hy-DP-114257251', // MAT masters
      ]
    : []
