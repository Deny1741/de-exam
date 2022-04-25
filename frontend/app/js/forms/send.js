export default class FormSend {
  constructor() {

  }

  static async send(form) {


    const body = JSON.stringify(Object.fromEntries(new FormData(form)));
    const { action, method } = form;
    console.log(body)
    return await fetch(action, {
      method,
      body: body,
    })
    .then(
      response => {
        return Promise.resolve(response.json())
      },
      err => {
        console.debug(err)
        return Promise.reject(err)
      }
    )
  }

  static onSuccess(json, form) {
    const formEl = document.querySelector(form)
    const title = document.querySelector('[data-js-succes-title]')
    formEl.classList.add('is-hidden')
    title.classList.remove('is-hidden')
  }
  static onError() {

  }
}