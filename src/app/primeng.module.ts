import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ImageModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
    MenuModule,
    CardModule,
    DividerModule,
    TagModule,
    ConfirmPopupModule,
    StepsModule,
    TabMenuModule,
    TabViewModule,
    RadioButtonModule,
    DialogModule,
    OverlayPanelModule
  ]
})
export class PrimengModule { }
