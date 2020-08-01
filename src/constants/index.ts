export type SettingNavigation = {
  icon?: string;
  name: string;
  component: (props?: any) => JSX.Element;
  navigationName: string;
  child?: SettingNavigation[];
};

export const settingNavigationMap: SettingNavigation[] = [
  {
    icon: 'account-plus-outline',
    name: 'Follow and Invite Friends',
    navigationName: 'FollowFriendSetting',
    child: [
      {
        icon: 'account-plus-outline',
        name: 'Follow Contacts',
        navigationName: 'FollowContact',
      },
      {
        icon: 'email-outline',
        name: 'Invite Friend by Email',
        navigationName: 'InviteByEmail',
      },
      {
        icon: 'comment-outline',
        name: 'Invite Friend by SMS',
        navigationName: 'InviteBySMS',
      },
      {
        icon: 'share-outline',
        name: 'Invite Friend by...',
        navigationName: 'InviteByOther',
      },
    ],
  },
];
