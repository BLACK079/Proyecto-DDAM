<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Captura y Guardado de fotos en la galeria.</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Captura y Guardado de fotos en la galeria.</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Ingrese una foto o tomese una foto" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
