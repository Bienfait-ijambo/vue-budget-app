import Swal from 'sweetalert2/dist/sweetalert2.js'

export function confirmDelation(message?: string) {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: 'Are you sure?',
      text: typeof message === undefined ? 'do you want to delete this ' : message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(result.isConfirmed)
      }
      reject()
    })
  })
}
