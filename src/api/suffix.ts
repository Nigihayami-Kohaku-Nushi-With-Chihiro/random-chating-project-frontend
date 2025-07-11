const AUTH = {
   REGISTER: "/auth/register/",
   LOGIN: "/auth/login/",
};

interface ApiSuffixProps {
   AUTH: typeof AUTH;
}

export const API_SUFFIXS: ApiSuffixProps = {
   AUTH,
};
