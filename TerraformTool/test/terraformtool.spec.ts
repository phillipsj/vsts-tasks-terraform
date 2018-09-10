import tool from '../src/terraformtool';
import { expect } from 'chai';

describe('prepare download link', () => {
    it('constructs a link from version, os and arch', () => {
        expect(tool('0.11.8', 'win32', 'x64')).to.eq('https://releases.hashicorp.com/terraform/0.11.8/terraform_0.11.8_windows_amd64.zip')
    });

    it('works for linux', () => {
        expect(tool('0.11.8', 'linux', 'x64')).to.eq('https://releases.hashicorp.com/terraform/0.11.8/terraform_0.11.8_linux_amd64.zip')
    });

    it('works for different version', () => {
        expect(tool('0.11.6', 'linux', 'x64')).to.eq('https://releases.hashicorp.com/terraform/0.11.6/terraform_0.11.6_linux_amd64.zip')
    });

    it('maps arch x64 to amd64', () => {
        expect(tool('0.11.8', 'linux', 'x64')).to.eq('https://releases.hashicorp.com/terraform/0.11.8/terraform_0.11.8_linux_amd64.zip')
    });

    it('maps arch x32 to 386', () => {
        expect(tool('0.11.8', 'linux', 'x32')).to.eq('https://releases.hashicorp.com/terraform/0.11.8/terraform_0.11.8_linux_386.zip')
    });
});