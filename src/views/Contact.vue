<template>
  <section id="contact" class="section">
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 102"
      height="75"
      width="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="svgcolor-light"
    >
      <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
    </svg>
    <div class="container flex">
      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
        }"
        class="header slide-in-left my-0"
        style="color: #f5f5f5"
      >
        CONTACT
      </div>
      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
          delay: 200,
        }"
        class="header-bar slide-in-left mb-4"
        style="background: #f5f5f5"
      ></div>
      <h2
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
          delay: 300,
        }"
        class="paragraph has-text-weight-bold is-size-6 my-5 fade-in"
        style="color: #14b2ba"
      >
        Have a question or want to work together?
      </h2>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form id="contact-form" @submit.prevent="handleSubmit(sendEmail)">
          <div class="columns is-mobile is-centered">
            <div
              class="column is-four-fifths-mobile is-three-quarters-tablet is-two-thirds-desktop is-half-fullhd"
            >
              <div class="box">
                <div
                  v-scroll-show="{
                    active: 'animated',
                    offset: $data.offsetAmount,
                    delay: 100,
                  }"
                  class="columns is-centered is-multiline"
                >
                  <div class="column is-full pb-0">
                    <div class="field is-horizontal">
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
                                placeholder="First and last name"
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
                  <div class="column is-full pb-0">
                    <div class="field is-horizontal">
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
                  <div class="column is-full pb-0">
                    <div class="field is-horizontal">
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
                  <div class="column is-full pb-0">
                    <div class="field is-horizontal">
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
                  <div class="column is-full pb-0">
                    <div class="field is-horizontal">
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
                  <div class="column is-full pb-0">
                    <div class="field is-horizontal">
                      <div class="field-body">
                        <div class="field is-grouped is-grouped-right">
                          <p class="control">
                            <button
                              class="button is-primary is-outlined"
                              type="submit"
                              form="contact-form"
                            >
                              SEND
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
    </div>
  </section>
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

<style lang="sass">
$bg-color: #112931
#contact
  background: $bg-color
  color: #fff
  padding: 175px 0
  position: relative
  .button.is-static
    color: #f5f5f5
    background: darken($bg-color, 4)

  .button.is-outlined
    border-radius: 0
    width: 6rem
    border-size: 2px
    &:hover
      background-color: #ba1032
      border-color: #ba1032
      transition: all 0.3s ease-in-out
  .box
    background: $bg-color
    box-shadow: none
    border: none
    font-family: "Raleway", sans-serif
    padding: 0 !important
    margin: 1rem
    .label
      color: #f5f5f5
    .input, .textarea
      background-color: darken($bg-color, 2)
      transition: border-color 0.5s ease-in
      font-family: "Raleway", sans-serif
      color: #f5f5f5
      border-radius: 0

span > span.icon.is-right
  color: #48c774 !important
span > span:nth-child(3):not(.icon)
  color: #ba1032 !important
span > span:nth-child(4):not(.icon)
  color: #ba1032 !important

::-webkit-input-placeholder
  color: #f5f5f5 !important
  opacity: 0.6
  transition: opacity 0.5s ease-in
:focus::-webkit-input-placeholder
  opacity: 0.9

#contact svg
  left: 0 !important
  position: absolute !important
  top: 0 !important
  overflow: hidden !important

.box .columns:not(.animated) .column
  opacity: 0 !important

.box .columns .column:nth-child(1)
  transition: 1s 1s opacity ease-in-out
.box .columns .column:nth-child(2)
  transition: 1s 1.1s opacity ease-in-out
.box .columns .column:nth-child(3)
  transition: 1s 1.2s opacity ease-in-out
.box .columns .column:nth-child(4)
  transition: 1s 1.3s opacity ease-in-out
.box .columns .column:nth-child(5)
  transition: 1s 1.4s opacity ease-in-out
.box .columns .column:nth-child(6)
  transition: 1s 2s opacity ease-in-out
</style>
