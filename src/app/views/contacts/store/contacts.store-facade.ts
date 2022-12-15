import { Injectable } from '@angular/core';
import * as fromRoot from '@app/root-store';
import * as fromContacts from '@app/contacts-store';
import { select, Store } from '@ngrx/store';

import { Contact } from '@app/core/models';
import {create, filterResult, load, loadAll, remove, searchText, update} from '@app/contacts-store/contacts-actions';

@Injectable()
export class ContactsStoreFacade {

  constructor(private store: Store<fromRoot.State>) { }

  contacts$ = this.store.pipe(
    select(fromContacts.getAllContacts)
  );

  searchText(text: string) {
    this.store.dispatch(searchText({text}));
  }

  filterResult( contacts: Contact[] ) {
    this.store.dispatch(filterResult({ contacts }));
  }

  loadAllContact() {
    this.store.dispatch(loadAll());
  }


  loadContact(id: number) {
    this.store.dispatch(load({id}));
  }

  createContact(contact: Contact) {
    this.store.dispatch(create({contact}));
  }

  updateContact(contact: Contact) {
    this.store.dispatch(update({contact}));
  }

  deleteContact(id: number) {
    this.store.dispatch(remove({id}));
  }

  getContactById(id: number) {
    return this.store.pipe(
      select(fromContacts.getContactById(id))
    )
  }
}
