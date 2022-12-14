<template>
  <div class="flex antialiased w-screen h-screen bg-gray-100 items-center justify-center">
    <div class="flex items-center justify-center gap-20">
      <InternationalOffice />
      <main class="w-128 h-128 flex justify-center flex-col gap-8 p-2">
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-bold">Faça seu login!</h3>
          <span class="text-gray-500">
            Para acessar seu processo de intercionalização <br />
            faça seu login ou se inscreva.
          </span>
        </div>
        <section class="flex flex-col gap-6">
          <button
            class="w-96 h-20 border border-transparent hover:border-purple-900 rounded flex justify-between items-center shadow-md hover:bg-purple-50 p-2"
          >
            <svg
              width="40"
              height="38"
              viewBox="0 0 50 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0L49.7275 17.9656L40.2824 47.0344H9.71758L0.272532 17.9656L25 0Z"
                fill="#3C1F6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.7204 28.8871C19.5018 28.1057 20.5616 27.6667 21.6667 27.6667H28.3333C29.4384 27.6667 30.4982 28.1057 31.2796 28.8871C32.061 29.6685 32.5 30.7283 32.5 31.8333V33.5C32.5 33.9602 32.1269 34.3333 31.6667 34.3333C31.2064 34.3333 30.8333 33.9602 30.8333 33.5V31.8333C30.8333 31.1703 30.5699 30.5344 30.1011 30.0656C29.6323 29.5967 28.9964 29.3333 28.3333 29.3333H21.6667C21.0036 29.3333 20.3677 29.5967 19.8989 30.0656C19.4301 30.5344 19.1667 31.1703 19.1667 31.8333V33.5C19.1667 33.9602 18.7936 34.3333 18.3333 34.3333C17.8731 34.3333 17.5 33.9602 17.5 33.5V31.8333C17.5 30.7283 17.939 29.6685 18.7204 28.8871Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.9999 19.3333C23.6192 19.3333 22.4999 20.4526 22.4999 21.8333C22.4999 23.214 23.6192 24.3333 24.9999 24.3333C26.3806 24.3333 27.4999 23.214 27.4999 21.8333C27.4999 20.4526 26.3806 19.3333 24.9999 19.3333ZM20.8333 21.8333C20.8333 19.5321 22.6987 17.6667 24.9999 17.6667C27.3011 17.6667 29.1666 19.5321 29.1666 21.8333C29.1666 24.1345 27.3011 26 24.9999 26C22.6987 26 20.8333 24.1345 20.8333 21.8333Z"
                fill="white"
              />
            </svg>
            <div class="flex flex-col items-center">
              <h5 class="font-bold">Aluno ânima</h5>
              <span class="text-xs font-sans text-gray-700 flex text-start">
                Acesso para alunos que desejam se <br />
                inscrever ou acompanhar o processo <br />
                de inscrição.
              </span>
            </div>
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
          <button
            class="w-96 h-20 border border-transparent hover:border-purple-900 rounded flex justify-between items-center shadow-md hover:bg-purple-50 p-2"
          >
            <svg
              width="40"
              height="38"
              viewBox="0 0 50 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.09543 18.2329L25 0.865247L48.9046 18.2329L39.7738 46.3344H10.2262L1.09543 18.2329Z"
                stroke="#3C1F6E"
                stroke-width="1.4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.3333 22.6667C17.873 22.6667 17.4999 23.0398 17.4999 23.5V31.8333C17.4999 32.2936 17.873 32.6667 18.3333 32.6667H31.6666C32.1268 32.6667 32.4999 32.2936 32.4999 31.8333V23.5C32.4999 23.0398 32.1268 22.6667 31.6666 22.6667H18.3333ZM15.8333 23.5C15.8333 22.1193 16.9525 21 18.3333 21H31.6666C33.0473 21 34.1666 22.1193 34.1666 23.5V31.8333C34.1666 33.214 33.0473 34.3333 31.6666 34.3333H18.3333C16.9525 34.3333 15.8333 33.214 15.8333 31.8333V23.5Z"
                fill="#3C1F6E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5655 18.3989C22.0343 17.9301 22.6702 17.6667 23.3333 17.6667H26.6666C27.3296 17.6667 27.9655 17.9301 28.4344 18.3989C28.9032 18.8677 29.1666 19.5036 29.1666 20.1667V33.5C29.1666 33.9602 28.7935 34.3333 28.3333 34.3333C27.873 34.3333 27.4999 33.9602 27.4999 33.5V20.1667C27.4999 19.9457 27.4121 19.7337 27.2558 19.5774C27.0996 19.4211 26.8876 19.3333 26.6666 19.3333H23.3333C23.1122 19.3333 22.9003 19.4211 22.744 19.5774C22.5877 19.7337 22.4999 19.9457 22.4999 20.1667V33.5C22.4999 33.9602 22.1268 34.3333 21.6666 34.3333C21.2063 34.3333 20.8333 33.9602 20.8333 33.5V20.1667C20.8333 19.5036 21.0966 18.8677 21.5655 18.3989Z"
                fill="#3C1F6E"
              />
            </svg>
            <NuxtLink to="/login-admin">
              <div class="flex flex-col items-center">
                <h5 class="font-bold">Internacional Office</h5>
                <span class="text-xs font-sans text-gray-700"> Administradores </span>
              </div>
            </NuxtLink>
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </section>
        <section class="flex items-start text-base gap-1 text-gray-600 font-medium">
          <span class="">Não tem uma conta?</span>
          <NuxtLink to="/cadastro/passo-1" class="text-purple-700 hover:text-purple-900"
            >Cadastre-se</NuxtLink
          >
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import InternationalOffice from "~/components/InternationalOffice";

export default {
  name: "IndexPage",
  components: {
    InternationalOffice,
  },
  computed: {
    isLoading() {
      return this.showLoading === false;
    },
  },
  methods: {
    isShowLoading() {
      this.showLoading = this.showLoading ? true : false;
    },
  },
};
</script>
