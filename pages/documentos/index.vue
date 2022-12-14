<template>
  <div class="flex w-screen antialiased h-screen bg-gray-100 items-center justify-center">
    <div class="flex items-center justify-center gap-20">
      <section>
        <img src="../../assets/img/logo-anima.png" alt="" class="w-20 h-20" />
        <div
          class="w-128 h-128 rounded bg-purple-900 flex items-center flex-col justify-between p-2"
        >
          <h1 class="text-white text-5xl">International Office</h1>
          <div class="p-4 flex flex-col gap-4">
            <button class="border rounded bg-white w-32">Fique por dentro</button>
            <div class="text-white flex flex-col gap-4">
              <h3>Programa de Contratação - Se Candidata</h3>
              <span class="text-sm">
                Em parceria com o setor de Vida & Carreira, iniciamos o Programa de
                Contratação - Se Candidata. Assista o primeiro encontro, com a presença de
                Fernanda Isqueiro, Consultora de Imigração relumantada pelo governo
                canadense.
              </span>
            </div>
            <div class="h-1 bg-white w-full"></div>
          </div>
          <div class="p-4">
            <div class="text-white flex flex-col gap-4">
              <h3>Programa de Mentoria Internacional</h3>
              <span class="text-sm">
                Em parceria com o setor de Vida & Carreira, iniciamos o Programa de
                Mentoria Internacional. Assista o primeiro encontro, com a presença de
                Paula Limena, que falou sobr eo desenvolvimento do estudante no
                planejamento da sua carreira global e as vantagens de ser um cidadão do
                mundo.
              </span>
            </div>
          </div>
          <div class="w-full flex justify-around mb-2">
            <div class="flex flex-col gap-2">
              <button class="border rounded bg-white w-32">Editais</button>
              <button class="border rounded bg-white w-32">Saiba mais</button>
            </div>
            <div class="flex flex-col gap-2">
              <button class="border rounded bg-white w-32">Fale conosco</button>
              <button class="border rounded bg-white w-32">Depoimentos</button>
            </div>
          </div>
        </div>
      </section>
      <!-- CADASTRO -->
      <main class="w-104 mt-16 h-128 flex justify-center flex-col gap-4 p-2">
        <div class="flex justify-between">
          <NuxtLink
            to="/cadastro/passo-2"
            class="hover:text-purple-900 text-xs text-gray-600 p-1 flex items-center justify-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Voltar
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-bold">Anexar documentos</h3>
        </div>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Passaporte*</span>
          <div class="flex items-center justify-center gap-4 w-full">
            <AppFormInput
              type="file"
              name="arquivo"
              ref="files"
              placeholder="Passaporte.PNG                890kb"
            />
            <svg
              class="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Plano curricular*</span>
          <div class="flex items-center justify-center gap-4 w-full">
            <AppFormInput
              type="file"
              name="file"
              ref="files"
              placeholder="Passaporte.PNG                890kb"
            />
            <svg
              class="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Certificado de Comprovação de proficiência*</span>
          <div class="flex items-center justify-center gap-4 w-full">
            <AppFormInput
              type="file"
              name="file"
              ref="files"
              placeholder="Passaporte.PNG                890kb"
            />
            <svg
              class="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Certificado de Vacinação COVID-19*</span>
          <div class="flex items-center justify-center gap-4 w-full">
            <AppFormInput
              type="file"
              name="file"
              ref="files"
              placeholder="Passaporte.PNG                890kb"
            />
            <svg
              class="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
        </section>
        <section class="w-94 flex items-start text-base gap-1 text-gray-600 font-medium">
          <AppButton>Enviar</AppButton>
          <NuxtLink to="/pagamento" class="w-full">
            <button
              type="button"
              class="w-full bg-purple-700 p-4 rounded text-white antialiased focus:outline-none disabled:opacity-75"
            >
              Avançar
            </button>
          </NuxtLink>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
import AppButton from "~/components/AppButton";
import AppFormInput from "~/components/AppFormInput";
import AppFormLabel from "~/components/AppFormLabel";
import AppFormSelect from "~/components/AppFormSelect";

export default {
  name: "IndexPage",
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
  },
  data() {
    return {
      inputType: "password",
    };
  },
  computed: {
    isPassword() {
      return this.inputType === "password";
    },
  },
  methods: {
    showPassword() {
      this.inputType = this.isPassword ? "text" : "password";
    },
  },
};
</script>
