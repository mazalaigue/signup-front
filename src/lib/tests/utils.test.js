import { getChangelog, isValidNAFCode } from '../utils';

describe('utils', () => {
  describe('isValidNAFCode', () => {
    it('should return true for COMMUNE D HEM', () => {
      expect(isValidNAFCode('api_particulier', '8411Z')).toBe(true);
    });
    it('should return true for ASSISTANCE PUBLIQUE HOPITAUX DE PARIS', () => {
      expect(isValidNAFCode('api_particulier', '8610Z')).toBe(true);
    });
    it('should return false for RED NEEDLES', () => {
      expect(isValidNAFCode('api_particulier', '6202A')).toBe(false);
    });
    it('should return true if provider does not filter on NAF code', () => {
      expect(isValidNAFCode('dgfip', '6202A')).toBe(true);
    });
  });

  describe('getChangelog', () => {
    const diff = {
      data_retention_period: [12, 11],
      fondement_juridique_title: [
        'Convention d\'accès à "Mon compte partenaire" - Ville de Hem / CAF du Nord - Contrat de service pris en application de la convention d\'accès à "Mon Compte Partenaire" (mode gestion déléguée) signés le 11 mai 2017.',
        'Convention d\'accès à "Mon compte partenaire" - Ville de Hem / CAF du Nord - Contrat de service pris en application de la convention d\'accès à "Mon Compte Partenaire" (mode gestion déléguée) signés le 11 mai 2017',
      ],
      updated_at: ['2019-05-13T16:35:19.742Z', '2019-05-14T09:30:54.304Z'],
      contacts: [
        [
          {
            email: 'raphael.dubigny@beta.gouv.fr',
            heading: 'Délégué à la protection des données',
            id: 'dpo',
            nom: 'Raphaël Dubigny2',
            phone_number: '0123456789',
          },
          {
            email: 'raphael.dubigny@beta.gouv.fr',
            heading: 'Responsable de traitement',
            id: 'responsable_traitement',
            nom: 'Raphaël Dubigny',
            phone_number: '0123456789',
          },
          {
            email: 'raphael.dubigny@beta.gouv.fr',
            heading: 'Responsable technique',
            id: 'technique',
            nom: 'Raphaël Dubigny',
            phone_number: '0123456789',
          },
        ],
        [
          {
            email: 'raphael.dubigny@beta.gouv.fr',
            heading: 'Délégué à la protection des données',
            id: 'dpo',
            nom: 'Raphaël Dubigny',
            phone_number: '0123456789',
          },
          {
            email: 'raphael.dubigny@beta.gouv.fr',
            heading: 'Responsable de traitement',
            id: 'responsable_traitement',
            nom: 'Raphaël Dubigny',
            phone_number: '0123456789',
          },
          {
            email: 'raphael.dubigny@beta.gouv.fr',
            heading: 'Responsable technique',
            id: 'technique',
            nom: 'Raphaël Dubigny',
            phone_number: '0123456789',
          },
        ],
      ],
      scopes: [
        {
          address: false,
          birthcountry: false,
          birthdate: true,
          birthplace: true,
          email: true,
          family_name: true,
          gender: false,
          given_name: true,
          openid: true,
          phone: false,
          preferred_username: true,
        },
        {
          address: false,
          birthcountry: false,
          birthdate: true,
          birthplace: true,
          email: true,
          family_name: true,
          gender: false,
          given_name: true,
          openid: true,
          phone: true,
          preferred_username: false,
        },
      ],
    };

    const changelog = [
      'Changement de la durée de conservation des données de "12" en "11".',
      'Changement de la référence du cadre juridique de "Convention d\'accès à "Mon compte ' +
        'partenaire" - Ville de Hem / CAF du Nord - Contrat de service pris en application de la ' +
        'convention d\'accès à "Mon Compte Partenaire" (mode gestion déléguée) signés le 11 mai ' +
        '2017." en "Convention d\'accès à "Mon compte partenaire" - Ville de Hem / CAF du Nord - ' +
        'Contrat de service pris en application de la convention d\'accès à "Mon Compte ' +
        'Partenaire" (mode gestion déléguée) signés le 11 mai 2017".',
      'Changement du nom du DPD de "Raphaël Dubigny2" en "Raphaël Dubigny".',
      'Changement du champ scopes.phone de "décoché" en "coché".',
      'Changement du champ scopes.preferred_username de "coché" en "décoché".',
    ];

    it('should return changelog for simple string field', () => {
      expect(getChangelog(diff)[0]).toEqual(changelog[0]);
    });
    it('should return changelog for several simple field', () => {
      expect(getChangelog(diff)[1]).toEqual(changelog[1]);
    });
    it('should return changelog for contact field', () => {
      expect(getChangelog(diff)[2]).toEqual(changelog[2]);
    });
    it('should return changelog for scopes', () => {
      expect(getChangelog(diff)).toEqual(changelog);
    });
  });
});
