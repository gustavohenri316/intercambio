<template>
  <div class="flex w-screen antialiased h-screen bg-gray-100 items-center justify-center">
    <div class="flex items-center justify-center gap-20">
      <InternationalOffice />
      <main class="w-104 h-128 flex justify-center flex-col gap-4 p-2">
        <div class="flex justify-end">
          <NuxtLink
            to="/cadastro/passo-1"
            class="hover:text-purple-900 text-xs text-gray-600 p-1 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="48"
                x2="128"
                y2="124"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <path
                d="M176,54.2a88,88,0,1,1-96,0"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
            </svg>
            Desconectar
          </NuxtLink>
        </div>
        <section class="w-104 flex flex-col gap-2">
          <AppButton>Alunos aprovados</AppButton>
        </section>
        <section class="w-104 flex flex-col gap-2">
          <AppButton>Alunos em processo</AppButton>
        </section>
        <section class="w-104 flex flex-col gap-2">
          <AppButton>Análise de Processos</AppButton>
        </section>
        <section
          class="w-104 flex items-center text-base gap-1 text-gray-600 font-medium"
        >
          <AppButton>Chat Alunos</AppButton>
        </section>
        <section
          class="w-104 flex items-center text-base gap-1 text-gray-600 font-medium"
        >
          <AppButton>Chat Parceiros</AppButton>
        </section>
        <section class="w-104 flex items-start text-base gap-1 text-gray-600 font-medium">
          <NuxtLink to="/cadastro/passo-2" class="w-full">
            <AppButton>Editar </AppButton>
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
