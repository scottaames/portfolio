<template>
  <div>
    <section class="hero is-small is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            Want to chat? Send me a message!
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <div class="box">
            <div class="columns is-mobile is-centered is-multiline">
              <div class="column is-full">
                <h1 class="has-text-grey-dark title has-text-centered is-2">
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
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input"
                          type="text"
                          placeholder="First and last"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-user"></i>
                        </span>
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
                    <div class="field is-expanded">
                      <div class="field has-addons">
                        <p class="control">
                          <a class="button is-static">
                            +1
                          </a>
                        </p>
                        <p class="control is-expanded">
                          <input
                            class="input"
                            type="tel"
                            placeholder="Your phone number"
                          />
                        </p>
                      </div>
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
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-danger"
                          type="text"
                          placeholder="e.g., john.doe@gmail.com"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </p>
                      <p class="help is-danger">
                        This field is required
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
                      <div class="control">
                        <input
                          class="input is-danger"
                          type="text"
                          placeholder="e.g. Employment opportunity, or just saying hi!"
                        />
                      </div>
                      <p class="help is-danger">
                        This field is required
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
                      <div class="control">
                        <textarea
                          class="textarea"
                          placeholder="How can I help you?"
                        ></textarea>
                      </div>
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
                    <div class="field">
                      <div class="control">
                        <button class="button is-primary">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<style lang="scss" scoped></style>
