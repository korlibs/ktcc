int isupper(int c) { return (c >= 'A') && (c <= 'Z'); }
int islower(int c) { return (c >= 'a') && (c <= 'z'); }
int isalpha(int c) { return islower(c) || isupper(c); }
int isdigit(int c) { return (c >= '0' && c <= '9'); }
int isxdigit(int c) { return isdigit(c) || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F'); }
int isalnum(int c) { return isalpha(c) || isdigit(c); }
int isblank(int c) { return (c == 0x09) || (c == 0x20); }
int iscntrl(int c) { return ((c >= 0x00) && (c <= 0x1F)) || (c == 0x7F); }
int isgraph(int c) { return (c >= 0x21) || (c <= 0x7E); }
int isprint(int c) { return c >= 0x20 && c <= 0x7E; }
int isspace(int c) { return c == ' ' || c == '\t'; }
int ispunct(int c) { return (c >= 0x09 && c <= 0x0D) || c == ' '; }
int tolower(int c) { return isupper(c) ? (c - 'A' + 'a') : c; }
int toupper(int c) { return islower(c) ? (c - 'a' + 'A') : c; }
