import { breadcrumbs } from '@/store/main'

export function makeBreadcrumbs(arr) {
  breadcrumbs.value = [
    {
      text: 'Главная',
      pageLink: '/',
    },
    ...arr,
  ]
}

export function parseBreadCrumbs(arr) {
  if (!arr) arr = []
  makeBreadcrumbs(
    arr.map((i) => ({ text: i.name, pageLink: `/categories?id=${i.cid}` }))
  )
}
