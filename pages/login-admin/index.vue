<template>
  <div class="flex w-screen antialiased h-screen bg-gray-100 items-center justify-center">
    <div class="flex items-center justify-center gap-20">
      <InternationalOffice />
      <!-- CADASTRO -->
      <main class="w-104 h-128 flex justify-center flex-col gap-6 p-2">
        <div class="flex justify-between">
          <NuxtLink
            to="/"
            class="hover:text-purple-900 text-xs text-gray-600 flex items-center justify-center gap-2"
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
          <div class="flex flex-col text-xs text-gray-600">
            <span class="text-gray-400">Passo 01/03</span>
            <span class="text-purple-900 font-semibold">informações de acesso</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-bold">Login International Office</h3>
          <span class="text-gray-500">
            Informações pessoais de acesso do Internacional Office.
          </span>
        </div>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">E-mail*</span>
          <AppFormInput type="text" placeholder="Digite seu e-mail" />
        </section>
        <section class="w-104 flex flex-col gap-2">
          <span class="text-gray-600">Senha*</span>
          <div class="w-full flex border border-gray-300 rounded p-2 bg-white">
            <input
              class="bg-white w-full outline-none"
              :type="inputType"
              placeholder="Digite sua senha*"
            />
            <button @click="showPassword()">
              {{ isPassword ? "Mostar" : "Ocultar" }}
            </button>
          </div>
        </section>
        <section
          class="w-104 flex items-center text-base gap-1 text-gray-600 font-medium"
        >
          <input type="checkbox" />
          <span class="">Eu concordo com os termos e condições.</span>
        </section>
        <section class="w-104 flex items-start text-base gap-1 text-gray-600 font-medium">
          <NuxtLink to="/Admin/Home" class="w-full">
            <AppButton>Acessar</AppButton>
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
import InternationalOffice from "~/components/InternationalOffice";

export default {
  name: "IndexPage",
  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
    InternationalOffice,
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
