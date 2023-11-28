import { CapacitorConfig } from '@capacitor/cli';
import { isPlatform } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';



const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

