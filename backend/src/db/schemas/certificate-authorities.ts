// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const CertificateAuthoritiesSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  parentCaId: z.string().uuid().nullable().optional(),
  projectId: z.string(),
  type: z.string(),
  dn: z.string()
});

export type TCertificateAuthorities = z.infer<typeof CertificateAuthoritiesSchema>;
export type TCertificateAuthoritiesInsert = Omit<z.input<typeof CertificateAuthoritiesSchema>, TImmutableDBKeys>;
export type TCertificateAuthoritiesUpdate = Partial<
  Omit<z.input<typeof CertificateAuthoritiesSchema>, TImmutableDBKeys>
>;
