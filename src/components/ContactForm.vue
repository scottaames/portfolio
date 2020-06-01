<template>
  <div id="contact-modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <section class="section">
        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
          <form id="contact-form" @submit.prevent="handleSubmit(sendEmail)">
            <div class="columns is-mobile is-centered">
              <div class="column is-full">
                <div class="box has-background-white-bis">
                  <div class="columns is-centered is-multiline">
                    <div class="column is-full">
                      <h1
                        class="has-text-grey-dark title has-text-centered is-2"
                      >
                        Contact Scott
                      </h1>
                    </div>
                    <div class="column is-full">
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label has-text-grey-dark">
                            Name
                          </label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <p
                              class="control is-expanded has-icons-left has-icons-right"
                            >
                              <ValidationProvider
                                name="name"
                                rules="required|alpha_spaces|min:1|max:80"
                                v-slot="{
                                  failed,
                                  passed,
                                  errors,
                                }"
                              >
                                <input
                                  v-model="name"
                                  class="input"
                                  :class="{
                                    'is-danger': failed,
                                    'is-success': passed,
                                  }"
                                  type="text"
                                  placeholder="First and last"
                                />
                                <span class="icon is-small is-left">
                                  <i class="fas fa-user"></i>
                                </span>
                                <span
                                  v-show="passed"
                                  class="icon is-small is-right"
                                >
                                  <i class="fas fa-check"></i>
                                </span>
                                <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">
                            Phone
                          </label>
                        </div>
                        <div class="field-body">
                          <div class="field is-expanded has-addons">
                            <p class="control">
                              <a class="button is-static">
                                +1
                              </a>
                            </p>
                            <p class="control is-expanded has-icons-right">
                              <input
                                v-model="phone"
                                class="input"
                                type="tel"
                                placeholder="Your phone number (optional)"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">
                            Email
                          </label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <p
                              class="control is-expanded has-icons-left has-icons-right"
                            >
                              <ValidationProvider
                                name="email"
                                rules="email|required"
                                v-slot="{
                                  failed,
                                  passed,
                                  errors,
                                }"
                              >
                                <input
                                  v-model="email"
                                  class="input"
                                  :class="{
                                    'is-danger': failed,
                                    'is-success': passed,
                                  }"
                                  type="email"
                                  placeholder="e.g., john.doe@gmail.com"
                                />
                                <span class="icon is-small is-left">
                                  <i class="fas fa-envelope"></i>
                                </span>
                                <span
                                  v-show="passed"
                                  class="icon is-small is-right"
                                >
                                  <i class="fas fa-check"></i>
                                </span>
                                <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Subject</label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <p class="control is-expanded has-icons-right">
                              <ValidationProvider
                                name="subject"
                                rules="required"
                                v-slot="{
                                  failed,
                                  passed,
                                  errors,
                                }"
                              >
                                <input
                                  v-model="subject"
                                  class="input"
                                  :class="{
                                    'is-danger': failed,
                                    'is-success': passed,
                                  }"
                                  type="text"
                                  placeholder="e.g. Employment opportunity, or just saying hi!"
                                />
                                <span
                                  v-show="passed"
                                  class="icon is-small is-right"
                                >
                                  <i class="fas fa-check"></i>
                                </span>
                                <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Message</label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <p class="control is-expanded has-icons-right">
                              <ValidationProvider
                                name="message"
                                rules="required|max:2000"
                                v-slot="{
                                  failed,
                                  passed,
                                  errors,
                                }"
                              >
                                <textarea
                                  v-model="message"
                                  class="textarea"
                                  :class="{
                                    'is-danger': failed,
                                    'is-success': passed,
                                  }"
                                  placeholder="How can I help you?"
                                ></textarea>
                                <span
                                  v-show="passed"
                                  class="icon is-small is-right"
                                >
                                  <i class="fas fa-check"></i>
                                </span>
                                <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-full">
                      <div class="field is-horizontal">
                        <div class="field-label">
                          <!-- Left empty for spacing -->
                        </div>
                        <div class="field-body">
                          <div class="field is-grouped is-grouped-right">
                            <p class="control">
                              <button
                                class="button is-link"
                                type="submit"
                                form="contact-form"
                              >
                                Send message
                              </button>
                            </p>
                            <p class="control">
                              <button class="button" @click="closeModal">
                                Cancel
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </section>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, setInteractionMode } from 'vee-validate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import emailjs from 'emailjs-com'

setInteractionMode('aggressive')

export default {
  name: 'Contact',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {},
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods: {
    closeModal: function() {
      document.getElementById('contact-modal').classList.remove('is-active')
    },
    sendEmail: function() {
      let params = {
        name: this.name,
        phone: this.phone.length ? this.phone : 'No phone number provided.',
        email: this.email,
        subject: this.subject,
        message: this.message,
      }
      let that = this
      emailjs
        .send(
          'contact_service',
          'contact_form',
          params,
          'user_wnxYALdapM0VREhmXeoYn'
        )
        .then(
          function(response) {
            alert(
              'Success!',
              'Your message has been sent. I will get back to you as soon as possible.',
              'success'
            )
            console.log('Success', response.status, response.text)
            that.name = that.phone = that.email = that.subject = that.message =
              ''
            that.$nextTick(function() {
              that.$refs.form.reset()
            })
          },
          function(error) {
            alert(
              'Error!',
              'There was a problem sending your message. Please try again later.',
              'danger'
            )
            console.log('FAILED', error)
          }
        )
    },
  },
}
</script>

<style lang="scss" scoped></style>
